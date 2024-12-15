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
import React, { useState, useEffect } from "react";

const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const [isRecording, setIsRecording] = useState(false); // State to manage recording status

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
  }, [mockInterviewQuestion, activeQuestionIndex]);

  // Handle "Record Answer" button click
  const handleRecordAnswer = () => {
    setIsRecording((prev) => !prev); // Toggle recording state
    if (!isRecording) {
      // Start recording logic here
      console.log("Recording started...");
    } else {
      // Stop recording logic here
      console.log("Recording stopped...");
    }
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

        {/* Volume Button for Text-to-Speech */}
        <Volume2
          className="cursor-pointer"
          onClick={() =>
            textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)
          }
        />

        {/* "Record Answer" Button */}
        <button
          className={`mt-5 px-5 py-2 text-white rounded-md ${isRecording ? "bg-red-500" : "bg-black"}`}
          onClick={handleRecordAnswer}
        >
          {isRecording ? "Stop Recording" : "Record Answer"}
        </button>

        <div className="border rounded-lg p-5 bg-blue-100 mt-18 md:block hidden">
          <h2 className="flex gap-2 items-center text-blue-800">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm text-blue-600 my-2">
            {process.env.NEXT_PUBLIC_QUESTION_NOTE}
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionSection;




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
//               className={p-2 rounded-full text-center text-xs md:text-sm cursor-pointer md:block hidden ${
//                 activeQuestionIndex === index
//                   ? "bg-black text-white"
//                   : "bg-secondary"
//               }}
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

//   // Function to get hints based on the question keywords
//   const getHintsForQuestion = (question) => {
//     if (!question) return [];
    
//     const lowerCaseQuestion = question.toLowerCase();

//     if (lowerCaseQuestion.includes("javascript")) {
//       return [
//         "Understand closures: Functions within functions and their scope.",
//         "Learn about promises and async/await for asynchronous programming.",
//         "Be mindful of hoisting in JavaScript for variable declarations and function definitions."
//       ];
//     } else if (lowerCaseQuestion.includes("array")) {
//       return [
//         "Sorting algorithms like QuickSort and MergeSort have different time complexities.",
//         "The two-pointer technique is great for problems like finding pairs that sum to a target."
//       ];
//     } else if (lowerCaseQuestion.includes("linked list")) {
//       return [
//         "Pointers are critical in linked lists. Ensure proper manipulation to avoid errors.",
//         "Detecting cycles in a linked list can be done using Floyd's Tortoise and Hare algorithm."
//       ];
//     } else if (lowerCaseQuestion.includes("recursion")) {
//       return [
//         "Identify the base case: without it, recursion could result in infinite loops.",
//         "Memoization stores previously computed results, speeding up recursive functions."
//       ];
//     } else {
//       return [
//         "Make sure your solution is scalable and consider time and space complexity.",
//         "Test your solution on multiple inputs to ensure it works under all possible conditions."
//       ];
//     }
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
//                 {getHintsForQuestion(mockInterviewQuestion[activeQuestionIndex]?.Question).map(
//                   (hint, index) => (
//                     <li key={index} className="text-gray-700">
//                       {hint}
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
//   const [isRecording, setIsRecording] = useState(false); // State to track recording status
//   const [mediaRecorder, setMediaRecorder] = useState(null); // To store the MediaRecorder instance
//   const [audioChunks, setAudioChunks] = useState([]); // To store the audio chunks

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

//   const startRecording = () => {
//     if (navigator.mediaDevices && MediaRecorder) {
//       navigator.mediaDevices.getUserMedia({ audio: true })
//         .then((stream) => {
//           const recorder = new MediaRecorder(stream);
//           setMediaRecorder(recorder);

//           recorder.ondataavailable = (e) => {
//             setAudioChunks((prev) => [...prev, e.data]);
//           };

//           recorder.onstop = () => {
//             const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
//             const audioUrl = URL.createObjectURL(audioBlob);
//             const audio = new Audio(audioUrl);
//             audio.play(); // Play the recorded audio after stopping
//           };

//           recorder.start();
//           setIsRecording(true);
//         })
//         .catch((err) => alert("Error accessing microphone: " + err));
//     } else {
//       alert("Your browser does not support audio recording.");
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorder && isRecording) {
//       mediaRecorder.stop();
//       setIsRecording(false);
//     }
//   };

//   // Function to get hints based on the question keywords
//   const getHintsForQuestion = (question) => {
//     if (!question) return [];

//     const lowerCaseQuestion = question.toLowerCase();

//     if (lowerCaseQuestion.includes("javascript")) {
//       return [
//         "Understand closures: Functions within functions and their scope.",
//         "Learn about promises and async/await for asynchronous programming.",
//         "Be mindful of hoisting in JavaScript for variable declarations and function definitions."
//       ];
//     } else if (lowerCaseQuestion.includes("array")) {
//       return [
//         "Sorting algorithms like QuickSort and MergeSort have different time complexities.",
//         "The two-pointer technique is great for problems like finding pairs that sum to a target."
//       ];
//     } else if (lowerCaseQuestion.includes("linked list")) {
//       return [
//         "Pointers are critical in linked lists. Ensure proper manipulation to avoid errors.",
//         "Detecting cycles in a linked list can be done using Floyd's Tortoise and Hare algorithm."
//       ];
//     } else if (lowerCaseQuestion.includes("recursion")) {
//       return [
//         "Identify the base case: without it, recursion could result in infinite loops.",
//         "Memoization stores previously computed results, speeding up recursive functions."
//       ];
//     } else {
//       return [
//         "Make sure your solution is scalable and consider time and space complexity.",
//         "Test your solution on multiple inputs to ensure it works under all possible conditions."
//       ];
//     }
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

//         {/* Audio Recording Button */}
//         <button
//           className="bg-blue-500 text-white p-2 rounded-lg mt-3"
//           onClick={isRecording ? stopRecording : startRecording}
//         >
//           {isRecording ? "Stop Recording" : "Start Recording"}
//         </button>

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
//                 {getHintsForQuestion(mockInterviewQuestion[activeQuestionIndex]?.Question).map(
//                   (hint, index) => (
//                     <li key={index} className="text-gray-700">
//                       {hint}
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


