import mongoose from 'mongoose';
type TestType = {
  company_name: string;
  director_name: number;
};
const testSchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      require: true,
    },
    director_name: {
      type: Number,
      require: false,
    },
  },
  { timestamps: true },
);
export default mongoose.model<TestType>('TestModel', testSchema);
