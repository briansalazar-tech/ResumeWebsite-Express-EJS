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

// Professional Project - NAME

// Personal Project - NAME

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