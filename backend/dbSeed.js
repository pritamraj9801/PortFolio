import "./dbConfig.js";
import ProjectInfo from "./ProjectInfo.js";
import ArticleInfo from "./ArticleInfo.js";

const projectData = [
  {
    projectName: "Portfolio Website",
    projectDescription: "Personal portfolio website",
    usedTechnologies: "React, Node.js, MongoDB",
    projectStartedDate: new Date("2024-01-01"),
    projectEndDate: new Date("2024-02-01"),
    isCompleted: true,
    isMajorProject: true,
    projectLiveUrl: "https://example.com",
    projectGitRepo: "https://github.com/username/portfolio",
    projectImage: "portfolio.png",
    projectType: "Web App"
  },
  {
    projectName: "Blog App",
    projectDescription: "A blogging platform",
    usedTechnologies: "Next.js, MongoDB",
    isCompleted: false,
    isMajorProject: false
  }
];

const seedProjects = async () => {
  try {
    await ProjectInfo.deleteMany(); // optional: clears collection
    await ProjectInfo.insertMany(projectData);
    console.log("✅ Project data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding project data:", error);
    process.exit(1);
  }
};
const articlesData = [
  {
    articleTitle: "Getting Started with MongoDB",
    articleDescription: "Beginner guide to MongoDB",
    articleAuthor: "John Doe"
  },
  {
    articleTitle: "Understanding Mongoose",
    articleDescription: "Deep dive into Mongoose ODM",
    articleAuthor: "Jane Smith"
  }
];
const seedArticles = async () => {
  try {
    await ArticleInfo.deleteMany();
    await ArticleInfo.insertMany(articlesData);
    console.log("✅ Articles data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding articles data:", error);
    process.exit(1);
  }
};
seedProjects();
seedArticles();