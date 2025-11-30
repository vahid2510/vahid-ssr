"use client";

import { motion } from "framer-motion";
import Parallax3D from "./Parallax3D";

export default function Hero() {
  return (
    <section className="h-[80vh] flex items-center justify-center relative mt-16">
      <Parallax3D />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="engineer-glass px-8 py-8 text-center max-w-2xl z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Vahid Ahmadi Khorami
        </h1>
        <p className="mt-4 text-sm md:text-base opacity-80">
          Mechanical Engineer • Python Developer • Numerical Methods
        </p>
        <p className="mt-3 text-xs md:text-sm opacity-70">
          Building numerical tools, educational content, and Python-based systems
          for engineering students and professionals.
        </p>
      </motion.div>
    </section>
  );
}
