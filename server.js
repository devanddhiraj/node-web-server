const express = require("express");
const chalk = require("chalk");
const hbs = require("hbs");
var app = express();
const port = process.env.PORT || 3100;
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
hbs.registerHelper('currentYear', () => {
    return new Date().getFullYear();
})
app.get("/", (req,res) => {
    res.render("home.hbs", {
        Header : "Welcome to Tutorial",
        pageTitle : "Home Page"
    });
});

app.get("/about", (req,res) => {
    res.render("about.hbs",{
        pageTitle : "About Page"
    });
});
app.get("/project", (req,res) => {
    res.render("project.hbs",{
        pageTitle : "Project Page"
    });
});
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log(chalk.green(`Node js running on port  ${port}`));
});
