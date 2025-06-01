import React from "react";
import Gallery from "../components/Gallery";
import { motion } from "framer-motion";

const GalleryPage = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "2rem" }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}
      >
        Image Gallery
      </motion.h1>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
