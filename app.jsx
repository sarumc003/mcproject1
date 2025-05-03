import React from "react";
import { motion } from "framer-motion";

const student = {
  name: "Jane Doe",
  grade: "10th Grade",
  subjects: [
    { name: "Math", score: 88 },
    { name: "Science", score: 92 },
    { name: "English", score: 85 },
  ],
};

const calculateGrowth = () => {
  const avg = student.subjects.reduce((sum, s) => sum + s.score, 0) / student.subjects.length;
  return Math.min((avg / 100) * 200, 200); // max tree height: 200px
};

export default function App() {
  const treeHeight = calculateGrowth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-4">Student Dashboard</h1>
        <div className="mb-4">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Grade:</strong> {student.grade}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Results</h2>
          <ul className="list-disc list-inside">
            {student.subjects.map((s, idx) => (
              <li key={idx}>{s.name}: {s.score}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Growth Tree</h2>
          <div className="h-52 flex justify-center items-end">
            <motion.div
              className="w-12 bg-green-500 rounded-t-full"
              initial={{ height: 0 }}
              animate={{ height: treeHeight }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}