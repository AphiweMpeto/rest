const express = require('express');
const fixArrayId = require('../helpers');
const app = express.Router();


let projects = [];
//GET ALL PROJECTS
app.get("/", (req, res) => {
    res.send(projects);
});
//GET ONE PROJECT
app.get("/:id", (req, res) => {
    const project = projects.find((project) => project.id == req.params.id);
    if (!project) res.status(404).send({ msg: "Project not found" });
    res.send(project);
});

//CREATE A PROJECT (push to array)
app.post("/", (req, res) => {
    let { title, desc, stack, img, img_alt, github, live } = req.body;
    if (!title || !desc || !stack || !img || !img_alt || !github || !live);
        res.status(400).send({ msg: "Not all the information sent" });
let newProject = { id: projects.length + 1, title, desc, stack, img, img_alt, github, live, };
project.push(newproject);
res.send(newProject);
});


//UPDATE A PROJECT (update item in array)
app.put("/:id", (req, res) => {
    let project = projects.find((project) => project.id == req.params.id);
    if (!project) res.status(404).send({ msg: "not found" });
    let { title, desc, stack, img, img_alt, github, live } = req.body;

    if (title) project.title = title;
    if (desc) project.desc = desc;
    if (stack) project.stack = stack;
    if (img) project.img = img;
    if (img_alt) project.img_alt = img_alt;
    if (github) project.github = github;
    if (live) project.live = live;

    //DELETE 
    app.delete("/:id", (req, res) => {
        projects = projects.filter((project) => project.id != req.params.id);
        fixArrayId(projects);
        res.send({ msg: "Item Removed" });
    })

    res.send(project);
})



module.exports = app;
