import React, { useState } from "react";
import "./QuoteGenerator.css";

const quotes = [
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(quotes[0]);
  const [copySuccess, setCopySuccess] = useState("");

  const generateQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
    setCopySuccess(""); // reset copy success message on new quote
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  return (
    <div className="quote-container">
      <div className="quote-card">
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">- {quote.author}</p>

        <div className="buttons">
          <button className="quote-btn" onClick={generateQuote}>
            🎲 New Quote
          </button>

          <button className="quote-btn" onClick={copyToClipboard}>
            📋 Copy
          </button>
        </div>

        {copySuccess && <p className="copy-success">{copySuccess}</p>}
      </div>
    </div>
  );
};

export default QuoteGenerator;
