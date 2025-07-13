import ProjectModel from "../models/Projects";
import { Request, Response } from "express";

export const ProjectController = {
  create: async (req: Request, res: Response) => {
    try {
      const project = new ProjectModel(req.body);
      await project.save();
      res.status(200).json(project);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },
  getAll : async (req: Request, res: Response) => {
    try {
        const projects =  await ProjectModel.find();

        if (projects.length === 0) {
        return res.status(404).json({ message: "No projects found" });
      }
        res.status(200).json(projects);
    } catch (error) {
         console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
};
