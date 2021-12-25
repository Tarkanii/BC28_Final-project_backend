const { Project, Sprint, Task } = require("../../models");


const getCurrent = async (req, res) => {
    const {user} = req;
    const userProjects = await Project.find({ participants: user._id });
    const newProjects = userProjects.map((project) => {
      const { _id } = project;
      const sprints = await Sprint.find({projectId:_id});
      const newSprints =  sprints.map(sprint => {
          const {_id} = sprint;
          const tasks = await Task.find({sprintId:_id});
          return {
              ...sprint,
              tasks,
          }
      });
      return {
          ...project,
          sprints:[...newSprints],
      };
  
    });
    res.json({
        status: "success",
      code: 200,
        token,
        user:{
            email:user.email,
            projects:[...newProjects]
        }
    })
};

// const getCurrent = async (req, res) => {
//   const { authorization = "" } = req.headers;
//   const [bearer, token] = authorization.split(" ");
//   if (token) {
//     const user = await User.findOne({ token });
//     console.log(user);
//     if (!user) {
//       throw new Unauthorized("Unauthorized");
//     }
//     res.json({
//       status: "success",
//       code: 200,
//       token,
//       email: user.email,
//     });
//   }
// };

module.exports = getCurrent;
    