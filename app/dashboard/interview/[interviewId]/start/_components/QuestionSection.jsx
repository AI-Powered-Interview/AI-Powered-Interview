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

// import { Lightbulb, Volume2 } from "lucide-react";
// import React, { useEffect, useState } from "react";

// const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
//   const [showHint, setShowHint] = useState(false); // State to toggle hint dropdown

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
//     setShowHint(false); // Close the hint dropdown when the question changes
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
//         <div className="border rounded-lg p-5 bg-blue-100 mt-18">
//           <div className="flex items-center gap-2 text-blue-800">
//             {/* Yellow Lightbulb Icon */}
//             <Lightbulb
//               className="text-yellow-500 cursor-pointer"
//               onClick={() => setShowHint(!showHint)} // Toggle dropdown
//             />
//             <strong>Hint</strong>
//           </div>
//           {/* Hint Dropdown */}
//           {showHint && (
//             <div className="mt-2 p-3 bg-white border rounded shadow-md">
//               <ul className="text-sm">
//                 {mockInterviewQuestion[activeQuestionIndex]?.Keywords.map(
//                   (keyword, index) => (
//                     <li key={index} className="text-gray-700">
//                       {keyword}
//                     </li>
//                   )
//                 )}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     )
//   );
// };

// export default QuestionSection;

// import { Lightbulb, Volume2 } from "lucide-react";
// import React, { useEffect, useState } from "react";

// const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
//   const [showHint, setShowHint] = useState(false); // State to manage hint visibility

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
//       textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question);
//     }
//     setShowHint(false); // Close the hint dropdown when the question changes
//   }, [mockInterviewQuestion, activeQuestionIndex]);

//   const toggleHint = () => {
//     setShowHint((prevState) => !prevState);
//   };

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

//         {/* Sound Button */}
//         <Volume2
//           className="cursor-pointer"
//           onClick={() =>
//             textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)
//           }
//         />

//         {/* Hint Section */}
//         <div className="border rounded-lg p-5 bg-blue-100 mt-18">
//           <div className="flex items-center gap-2">
//             {/* Yellow Bulb Icon */}
//             <Lightbulb
//               className="text-yellow-500 cursor-pointer"
//               onClick={toggleHint}
//             />
//             <span className="font-medium text-blue-800">Hint</span>
//           </div>

//           {/* Dropdown for Hints */}
//           {showHint && (
//             <div className="mt-2 p-3 bg-white border rounded shadow-md">
//               <ul className="text-sm">
//                 {mockInterviewQuestion[activeQuestionIndex]?.Keywords?.length > 0 ? (
//                   mockInterviewQuestion[activeQuestionIndex]?.Keywords.map(
//                     (keyword, index) => (
//                       <li key={index} className="text-gray-700">
//                         {keyword}
//                       </li>
//                     )
//                   )
//                 ) : (
//                   <li className="text-gray-700">No hints available.</li>
//                 )}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     )
//   );
// };

// export default QuestionSection;



// import { Lightbulb, Volume2 } from "lucide-react";
// import React, { useEffect, useState } from "react";

// const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
//   const [showHint, setShowHint] = useState(false); // State to manage hint visibility

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
//       textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question);
//     }
//     setShowHint(false); // Close the hint dropdown when the question changes
//   }, [mockInterviewQuestion, activeQuestionIndex]);

//   const toggleHint = () => {
//     setShowHint((prevState) => !prevState);
//   };

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

//         {/* Sound Button */}
//         <Volume2
//           className="cursor-pointer"
//           onClick={() =>
//             textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)
//           }
//         />

//         {/* Hint Section */}
//         <div className="border rounded-lg p-5 bg-blue-100 mt-18">
//           <div className="flex items-center gap-2">
//             {/* Yellow Bulb Icon */}
//             <Lightbulb
//               className="text-yellow-500 cursor-pointer"
//               onClick={toggleHint}
//             />
//             <span className="font-medium text-blue-800">Hint</span>
//           </div>

//           {/* Dropdown for Hints */}
//           {showHint && (
//             <div className="mt-2 p-3 bg-white border rounded shadow-md">
//               <ul className="text-sm">
//                 {mockInterviewQuestion[activeQuestionIndex]?.Keywords?.length > 0 ? (
//                   mockInterviewQuestion[activeQuestionIndex]?.Keywords.map(
//                     (keyword, index) => (
//                       <li key={index} className="text-gray-700">
//                         {keyword}
//                       </li>
//                     )
//                   )
//                 ) : (
//                   <li className="text-gray-700">No hints available for this question.</li>
//                 )}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     )
//   );
// };

// export default QuestionSection;

import { Lightbulb, Volume2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const [showHint, setShowHint] = useState(false); // State to manage hint visibility

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
      textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question);
    }
    setShowHint(false); // Close the hint dropdown when the question changes
  }, [mockInterviewQuestion, activeQuestionIndex]);

  const toggleHint = () => {
    setShowHint((prevState) => !prevState);
  };

  // Enhanced Hints based on topics
  const getHintsForTopic = (question) => {
    if (!question) return [];

    const lowerCaseQuestion = question.toLowerCase();

    // Return hints based on the keywords in the question
    if (lowerCaseQuestion.includes("javascript")) {
      return [
        "Closures help with managing function scope and state.",
        "The event loop and call stack are fundamental to understanding JavaScript's asynchronous behavior.",
        "Use Promises to handle asynchronous operations in JavaScript.",
        "Async/Await simplifies working with asynchronous code.",
        "Hoisting can affect variable and function declarations in JavaScript.",
      ];
    } else if (lowerCaseQuestion.includes("array")) {
      return [
        "Common sorting algorithms include Quicksort, Mergesort, and Bubble sort.",
        "Binary search works efficiently on sorted arrays and reduces time complexity to O(log n).",
        "Hash Maps allow for fast lookups and can be helpful with array problems.",
        "The two-pointer technique is useful for problems like reversing arrays or finding pairs.",
      ];
    } else if (lowerCaseQuestion.includes("linked list")) {
      return [
        "Pointers are essential when working with linked lists.",
        "Linked lists can be traversed in a linear fashion, but reversing requires extra steps.",
        "Detect cycles in a linked list using Floyd's Tortoise and Hare algorithm.",
        "For efficient memory usage, you can use singly linked lists, but doubly linked lists offer more flexibility.",
      ];
    } else if (lowerCaseQuestion.includes("tree")) {
      return [
        "DFS (Depth-First Search) and BFS (Breadth-First Search) are key traversal methods.",
        "Binary Search Trees (BST) ensure efficient searching by maintaining sorted order.",
        "Balanced trees (AVL or Red-Black trees) keep operations like insertion and deletion efficient.",
        "The height of a tree is crucial for determining the time complexity of various operations.",
      ];
    } else if (lowerCaseQuestion.includes("recursion")) {
      return [
        "Ensure you have a clear base case to prevent infinite recursion.",
        "Deep recursion can lead to stack overflow errors, so be cautious with large inputs.",
        "Memoization can optimize recursive functions by storing previously computed results.",
        "Think of recursion as breaking a problem into smaller subproblems that resemble the original.",
      ];
    } else if (lowerCaseQuestion.includes("time complexity")) {
      return [
        "Big O notation describes the upper bound of an algorithm's time complexity.",
        "Remember to analyze both the worst-case and best-case complexities.",
        "Consider space complexity alongside time complexity for more efficient solutions.",
        "Common complexities include O(1), O(log n), O(n), and O(n log n).",
      ];
    }

    // Add fallback generic hints if no specific match is found
    return [
      "Try to break down the problem into smaller parts.",
      "Focus on edge cases; they often break simple solutions.",
      "Consider using a brute-force approach to identify patterns.",
      "Think about how you can optimize the solution after solving the basic problem.",
    ];
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

        {/* Sound Button */}
        <Volume2
          className="cursor-pointer"
          onClick={() =>
            textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)
          }
        />

        {/* Hint Section */}
        <div className="border rounded-lg p-5 bg-blue-100 mt-18">
          <div className="flex items-center gap-2">
            {/* Yellow Bulb Icon */}
            <Lightbulb
              className="text-yellow-500 cursor-pointer"
              onClick={toggleHint}
            />
            <span className="font-medium text-blue-800">Hint</span>
          </div>

          {/* Dropdown for Hints */}
          {showHint && (
            <div className="mt-2 p-3 bg-white border rounded shadow-md">
              <ul className="text-sm">
                {/* Display hints for the active question */}
                {getHintsForTopic(
                  mockInterviewQuestion[activeQuestionIndex]?.Question
                ).map((hint, index) => (
                  <li key={index} className="text-gray-700">
                    {hint}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default QuestionSection;
