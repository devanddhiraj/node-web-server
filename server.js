const express = require("express");
const chalk = require("chalk");
const hbs = require("hbs");
var app = express();
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

app.use(express.static(__dirname + "/public"));

app.listen(3100, () => {
    console.log(chalk.green("Node js running on port  " +chalk.red.bold("3100")));
});