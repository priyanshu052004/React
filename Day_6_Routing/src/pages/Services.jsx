import React from 'react'
import { motion } from "framer-motion";
import "../Style/Service.css";
export default function Services() {
const courses = [
  "Web Development",
  "Data Structures",
  "Machine Learning",
  "UI/UX Design",
];
  return (
     <div className="services">
      <h1>Our Courses</h1>

      <div className="card-container">
        {courses.map((course, index) => (
          <motion.div
            className="card"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{course}</h3>
            <p>Learn {course} from industry experts.</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
