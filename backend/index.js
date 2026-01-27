import express, { json } from "express";
import cors from "cors";
import Project  from "./ProjectInfo.js";
import Article from "./ArticleInfo.js";

const app = express();
app.use(cors());
app.use(json());

// Get Major Projects
app.get("/api/GetMajorProjects", async (req, res) => {
  try {
    const projects = await Project.find({ isMajorProject: true });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Minor Projects
app.get("/api/GetMinorProjects", async (req, res) => {
  try {
    const projects = await Project.find({ isMajorProject: false });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Get all Articles
app.get("/api/GetAllArticles", async (req, res) => {
  try {
    const articles = await Article.find({});
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
