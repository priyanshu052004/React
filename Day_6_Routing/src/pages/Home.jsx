import React from 'react';
import { motion } from "framer-motion";
import "../Style/Home.css";

export default function Home() {
    return (
    <div className="home">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Learn Without Limits</h1>
        <p>Upgrade your skills with Nexus Education Platform</p>
        <button>Get Started</button>
      </motion.div>
    </div>
  );
}
