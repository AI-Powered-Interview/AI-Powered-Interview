// import { Lightbulb, Volume2 } from "lucide-react";
// import React from "react";

// const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
//   const textToSpeech = (text) => {
//     if ("speechSynthesis" in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       window.speechSynthesis.speak(speech);
//     } else {
//       alert("Sorry, your browser does not support text to speech.");
//     }
//   };
//   return (
//     mockInterviewQuestion && (
//       <div className=" flex flex-col justify-between p-5 border rounded-lg my-1 bg-secondary">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
//           {mockInterviewQuestion &&
//             mockInterviewQuestion.map((question, index) => (
//               <h2
//                 className={`p-2  rounded-full text-center text-xs md:text-sm cursor-pointer md:block hidden ${
//                   activeQuestionIndex == index
//                     ? "bg-black text-white"
//                     : "bg-secondary"
//                 }`}
//               >
//                 Question #{index + 1}
//               </h2>
//             ))}
//         </div>
//         <h2 className="my-5 text-md md:text-lg">
//           {mockInterviewQuestion[activeQuestionIndex]?.Question}
//         </h2>
//         <Volume2
//           className="cursor-pointer"
//           onClick={() =>
//             textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)
//           }
//         />
//         <div className="border rounded-lg p-5 bg-blue-100 mt-18 md:block hidden">
//           <h2 className="flex gap-2 items-center text-blue-800">
//             <Lightbulb />
//             <strong>Note:</strong>
//           </h2>
//           <h2 className="text-sm text-blue-600 my-2">
//             {process.env.NEXT_PUBLIC_QUESTION_NOTE}
//           </h2>
//         </div>
//       </div>
//     )
//   );
// };

// export default QuestionSection;



// import { Lightbulb, Volume2 } from "lucide-react";
// import React, { useEffect } from "react";

// const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
//   const textToSpeech = (text) => {
//     if ("speechSynthesis" in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       window.speechSynthesis.speak(speech);
//     } else {
//       alert("Sorry, your browser does not support text to speech.");
//     }
//   };

//   // Automatically speak the question when it becomes visible
//   useEffect(() => {
//     if (mockInterviewQuestion && mockInterviewQuestion[activeQuestionIndex]) {
//       textToSpeech(mockInterviewQuestion[activeQuestionIndex].Question);
//     }
//   }, [mockInterviewQuestion, activeQuestionIndex]);

//   return (
//     mockInterviewQuestion && (
//       <div className="flex flex-col justify-between p-5 border rounded-lg my-1 bg-secondary">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//           {mockInterviewQuestion.map((question, index) => (
//             <h2
//               key={index}
//               className={`p-2 rounded-full text-center text-xs md:text-sm cursor-pointer md:block hidden ${
//                 activeQuestionIndex === index
//                   ? "bg-black text-white"
//                   : "bg-secondary"
//               }`}
//             >
//               Question #{index + 1}
//             </h2>
//           ))}
//         </div>
//         <h2 className="my-5 text-md md:text-lg">
//           {mockInterviewQuestion[activeQuestionIndex]?.Question}
//         </h2>
//         <Volume2
//           className="cursor-pointer"
//           onClick={() =>
//             textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)
//           }
//         />
//         <div className="border rounded-lg p-5 bg-blue-100 mt-18 md:block hidden">
//           <h2 className="flex gap-2 items-center text-blue-800">
//             <Lightbulb />
//             <strong>Note:</strong>
//           </h2>
//           <h2 className="text-sm text-blue-600 my-2">
//             {process.env.NEXT_PUBLIC_QUESTION_NOTE}
//           </h2>
//         </div>
//       </div>
//     )
//   );
// };

// export default QuestionSection;
import { Lightbulb, Volume2 } from "lucide-react";
import React, { useEffect, useState } from "react";

// Mock Data: Array with questions and keywords
const mockInterviewQuestion = [
  {
    Question: "What is React?",
    Keywords: ["Library", "JavaScript", "UI", "Components"],
  },
  {
    Question: "What is Redux?",
    Keywords: ["State", "Management", "Store", "Actions"],
  },
  {
    Question: "What is Node.js?",
    Keywords: ["Runtime", "JavaScript", "Server-side", "Non-blocking"],
  },
  {
    Question: "Explain REST APIs.",
    Keywords: ["HTTP", "Stateless", "CRUD", "Endpoints"],
  },
];

const QuestionSection = ({ activeQuestionIndex }) => {
  const [showHint, setShowHint] = useState(false);

  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text to speech.");
    }
  };

  // Automatically speak the question when it becomes visible
  useEffect(() => {
    if (mockInterviewQuestion && mockInterviewQuestion[activeQuestionIndex]) {
      textToSpeech(mockInterviewQuestion[activeQuestionIndex].Question);
    }
    setShowHint(false); // Close the hint dropdown when the question changes
  }, [activeQuestionIndex]);

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    mockInterviewQuestion && (
      <div className="flex flex-col justify-between p-5 border rounded-lg my-1 bg-secondary">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion.map((question, index) => (
            <h2
              key={index}
              className={`p-2 rounded-full text-center text-xs md:text-sm cursor-pointer md:block hidden ${
                activeQuestionIndex === index
                  ? "bg-black text-white"
                  : "bg-secondary"
              }`}
            >
              Question #{index + 1}
            </h2>
          ))}
        </div>

        <h2 className="my-5 text-md md:text-lg">
          {mockInterviewQuestion[activeQuestionIndex]?.Question}
        </h2>

        <div className="flex items-center gap-3">
          {/* Sound Icon */}
          <Volume2
            className="cursor-pointer"
            onClick={() =>
              textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)
            }
          />

          {/* Hint Lightbulb */}
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={toggleHint}
            >
              <Lightbulb
                className={`text-yellow-500 ${showHint ? "text-yellow-500" : ""}`}
              />
              <span className="text-sm font-medium">Hint</span>
            </div>
            {showHint && (
              <div className="absolute top-full left-0 mt-2 p-3 bg-white border rounded shadow-md z-10">
                <ul className="text-sm">
                  {mockInterviewQuestion[activeQuestionIndex]?.Keywords.map(
                    (keyword, index) => (
                      <li key={index} className="text-gray-700">
                        {keyword}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

// Example usage: Pass the activeQuestionIndex as a prop
const App = () => {
  return <QuestionSection activeQuestionIndex={0} />;
};

export default App;
