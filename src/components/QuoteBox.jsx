import { useState } from "react";
import { motion } from "framer-motion";

const QuoteBox = () => {
  const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal.",
    "Stay hungry. Stay foolish.",
    "Believe in yourself and all that you are.",
    "Dream big and dare to fail.",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <motion.div
      className="text-center mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className="text-xl md:text-2xl mb-4">{quote}</p>
      <button
        onClick={getRandomQuote}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        New Quote
      </button>
    </motion.div>
  );
};

export default QuoteBox;
