import { Schema, model } from "./dbConfig.js";
const articlesInfoSchema = new Schema({
    articleTitle:{type:String,required:true},
    articleDescription:{type:String,required:true},
    articleAuthor:{type:String,required:true},
});
export default model('ArticleInfo',articlesInfoSchema)