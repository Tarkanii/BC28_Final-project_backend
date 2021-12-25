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
      min:1,
    },
    spentHours: {
      type: Number,
      min:1,
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
  scheduledHours: Joi.number().min(1).required(),
  spentHours: Joi.number().min(1),
});

const Task = model("task", taskSchema);

module.exports = {
  Task,
  joiSchema,
};
