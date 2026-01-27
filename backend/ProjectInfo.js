import { Schema, model } from "./dbConfig.js";

const projectInfoSchema = new Schema({
    projectName:{type:String,required:true},
    projectDescription:{type:String,required:true},
    usedTechnologies:{type:String,required:true},
    projectStartedDate:{type:Date,required:false},
    projectEndDate:{type:Date,required:false},
    isCompleted:{type:Boolean,required:true},
    isMajorProject:{type:Boolean,required:true},
    projectLiveUrl:{type:String,required:false},
    projectGitRepo:{type:String,required:false},
    projectImage:{type:String,required:false},
    projectType:{type:String,required:false},
    projectImage:{type:String,required:false}
});
export default model('ProjectInfo',projectInfoSchema)