const createNewProject = require("./createNewProject")
const getProjectById = require("./getProjectById")
const removeProject = require("./removeProject")
const renameProject = require("./renameProject")
const getProject = require("./getProject")
const updateParticipants = require("./updateParticipants")
const getUserByEmail = require("./getUserByEmail")


module.exports = {
    createNewProject,
    getProjectById,
    removeProject,
    renameProject,
    getProject,
    updateParticipants,
    getUserByEmail
}
