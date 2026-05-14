import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

// Index page
app.get("/", (req, res) => {
    res.render("index.ejs");
});

// About
app.get("/about", (req, res) => {
    res.render("about.ejs");
});

// Resume
app.get("/resume", (req, res) => {
    res.render("resume.ejs");
});

// Certifications
app.get("/certifications", (req, res) => {
    res.render("certifications.ejs");
});

// Connect
app.get("/connect", (req, res) => {
    res.render("connect.ejs");
});

// Projects
app.get("/projects", (req, res) => {
    res.render("projects.ejs");
});

// Professional Project - 1:1 DSMS
app.get("/projects/1to1DSMS", (req, res) => {
    res.render("ProProj_1to1DSMS.ejs");
});

// Professional Project - 1:1 Traner
app.get("/projects/1to1TranerMS", (req, res) => {
    res.render("ProProj_1to1TranerMS.ejs");
});

// Professional Project - New Hug HS
app.get("/projects/NewHugHS", (req, res) => {
    res.render("ProProj_NewHugHS.ejs");
});

// Professional Project - New Hug HS
app.get("/projects/TeacherRefresh", (req, res) => {
    res.render("ProProj_TeacherRefresh.ejs");
});
// Personal Project - 100 Days of Code
app.get("/projects/100DaysofCode", (req, res) => {
    res.render("PersProj_100DaysofCode.ejs");
});

// Personal Project - Cloud Resume Challenge
app.get("/projects/CloudResumeChallenge", (req, res) => {
    res.render("PersProj_CloudResumeChallenge.ejs");
});

// Personal Project - GitHub Projects
app.get("/projects/GitHubProjects", (req, res) => {
    res.render("PersProj_GitHubProjects.ejs");
});

// Personal Project - PC Building
app.get("/projects/PCBuilding", (req, res) => {
    res.render("PersProj_PCBuilding.ejs");
});

// Personal Project - Portfolio Website 1.0
app.get("/projects/PortfolioWebsiteV1", (req, res) => {
    res.render("PersProj_PortfolioWebsiteV1.ejs");
});

// Personal Project - Portfolio Website 2.0
app.get("/projects/PortfolioWebsiteV2", (req, res) => {
    res.render("PersProj_PortfolioWebsiteV2.ejs");
});

// Personal Project - Windows Server Home Labs
app.get("/projects/WindowsServerLabs", (req, res) => {
    res.render("PersProj_WindowsServerLabs.ejs");
});

// Personal Project - Windows Server Home Labs
app.get("/projects/WGUCapstone", (req, res) => {
    res.render("PersProj_WGUCapstone.ejs");
});


// Under connstruction
app.get("/underconstruction", (req, res) => {
    res.render("underconstruction.ejs");
});

// Page not found - 404
app.use((req, res, next) => {
  res.status(404).render("404.ejs"); // if using EJS
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});