const { Schema, SchemaTypes, model } = require("mongoose");
const Joi = require("joi");

const sprintSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    startDate: {
      type: String,
      required: [true, "startDate is required"],
    },
    endDate: {
      type: String,
      required: [true, "endDate is required"],
    },
    sprintDuration:{
      type:Number,
      required:[true,"Duration id required"]
    },
    hoursSpent:{
      type:Number,
      default:0,
    },
    projectId: {
      type: SchemaTypes.ObjectId,
      ref: "project",
    },
    tasks:[{
      type:SchemaTypes.ObjectId,
      ref:"task"
    }]
  },
  { versionKey: false, timestamps: true }
);

sprintSchema.methods.setName = function (newName) {
  this.name = newName;
};
const joiSchema = Joi.object({
  name: Joi.string().required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  sprintDuration: Joi.number().required(),
  projectId: Joi.string()
});

const Sprint = model("sprint", sprintSchema);

module.exports = {
  Sprint,
  joiSchema,
};
