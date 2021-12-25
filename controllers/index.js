const auth = require("./auth");
const projects = require("./projects")
const Sprint = require("./projects/sprint")
const Task = require("./projects/Task")

module.exports = { 
    auth,
    projects,
    Sprint,
    Task
};
