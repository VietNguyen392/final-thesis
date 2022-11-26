import { Request, Response } from 'express';
import TestModel from '../models/Service';
const TestController = {
  createTest: async (req: Request, res: Response) => {
    try {
      const { company_name, director_name } = req.body;
      const newTest = await TestModel.create({
        company_name,
        director_name,
      });
      if (newTest) {
        res.status(200).json({
          code: 0,
          _id: newTest.id,
          name: newTest.company_name,
        });
      } else {
        res.status(400).send({ msg: 'error' });
      }
    } catch (error) {
      res.status(500).send({ msg: 'Server error' });
    }
  },
  getTest: async (_req: Request, res: Response) => {
    try {
      const data = await TestModel.find().sort('-createdAt');
      if (!data) res.status(404).send({ msg: 'not found' });
      res.json({ data });
    } catch (error: any) {
      return res.status(500).send({ msg: error.message });
    }
  },
  editTest: async (req: Request, res: Response) => {
    try {
      const { company_name, director_name } = req.body;
      const updateTest = await TestModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          company_name,
          director_name,
        },
        { new: true },
      );
      res.json({ msg: 'update success', updateTest });
    } catch (err: any) {
      return res.status(500).send({ msg: 'Sever error' });
    }
  },
  deleteTest: async (req: Request, res: Response) => {
    try {
      const test = await TestModel.findByIdAndDelete(req.params.id);
      if (!test) return res.status(404).send({ msg: 'User not found' });
      res.json({ msg: 'delete success' });
    } catch (error: any) {
      res.status(500).json({ msg: 'Server error' });
    }
  },
};
export default TestController;
