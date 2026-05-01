import azure.functions as func
import logging, os
from azure.cosmosdb.table import TableService

CONNECTION_STRING = os.environ.get("DB_CONNECTION_STRING")
TABLE_ENDPOINT = TableService(endpoint_suffix = "table.cosmos.azure.com", connection_string= CONNECTION_STRING)
VIEWS = 0

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)


def updateViews():
    """Converts view count from str to int. View count is updated by 1. View count then converted back to str and returned."""
    global VIEWS
    # Get Entity
    entity = TABLE_ENDPOINT.get_entity(table_name="PageViews",
                   partition_key="PageViews",
                   row_key="0")
    
    # Assign TotalView value to variable and incriment value by 1. Value is updated in Cosmos DB Table.
    viewcount = entity['TotalViews']
    views = int(viewcount)
    views += 1
    viewcount = str(views)
    # Global VIEW variable updated. Value passed into Http Trigger.
    VIEWS = viewcount
    
    # Update Cosmos DB Table entity value with viewcount.
    TABLE_ENDPOINT.update_entity(table_name="PageViews",
                      entity={
                            "PartitionKey":"PageViews",
                            "RowKey":"0",
                            "TotalViews":viewcount})
    return


@app.route(route="HttpTrigger")
def HttpTrigger(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    count = req.params.get('count')
    if not count:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            count = req_body.get('count')

    if count:
        updateViews()
        return func.HttpResponse(VIEWS)
    
    else:
        return func.HttpResponse(
             f"Execute Azure Function with params to generate views. Views: {VIEWS} ",
             status_code=200
        )