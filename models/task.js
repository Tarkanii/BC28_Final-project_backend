const { SchemaTypes, Schema, model } = require("mongoose");
const Joi = require("joi");

const taskSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    scheduledHours: {
      type: Number,
      required: [true, "scheduledHours is required"],
      min:0,
    },
    spentHours: {
      type: Number,
      min:0,
      default:0,
    },
    sprintId:{
      type:SchemaTypes.ObjectId,
      ref:"sprints"
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

taskSchema.methods.setSpentHours = function (hours) {
  this.spentHours = hours;
};
const joiSchema = Joi.object({
  name: Joi.string().required(),
  scheduledHours: Joi.number().min(0).required(),
  spentHours: Joi.number().default(0),
  sprintId:Joi.string(),
  owner:Joi.string(),
});

const Task = model("task", taskSchema);

module.exports = {
  Task,
  joiSchema,
};
