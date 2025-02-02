import { useState } from "react";

const FaqForm = ({ onFaqSubmit }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !answer) return alert("Both fields are required");

    onFaqSubmit({ question, answer });
    setQuestion("");
    setAnswer("");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-5xl mx-auto border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Add FAQ</h2>
      <form className="flex items-center justify-between w-full" onSubmit={handleSubmit}>
        {/* Left: Input Fields */}
        <div className="flex flex-col w-full max-w-3xl space-y-2">
          {/* Question Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Question</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter question..."
            />
          </div>

          {/* Answer Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Answer</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter answer..."
            />
          </div>
        </div>

        {/* Right: Submit Button */}
        <button
          type="submit"
          className="ml-4 px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700 transition active:scale-95"
        >
          Add FAQ
        </button>
      </form>
    </div>
  );
};

export default FaqForm;