import React, { useState, useEffect } from 'react';



// import React, { useState, useEffect } from 'react';

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }
  },

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
     [timeRemaining, onAnswered]
    
  }
   );
   


  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>{id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answers} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;


//   return (
//     <div>
//       <h2>{question}</h2>
//       <p>Time remaining: {timeRemaining} seconds</p>
//     </div>
//   );
// }

// export default Question;


// function Question({ question, onAnswered }) {
//   const [timeRemaining, setTimeRemaining] = useState(10);

//   // add useEffect code
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1);
//     }, 1000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [timeRemaining]);

//   useEffect(() => {
//     if (timeRemaining === 0) {
//       setTimeRemaining(10);
//       props.onAnswered(false);
//     }
//   }, [timeRemaining, props]);





// function Question(props) {
//   const [timeRemaining, setTimeRemaining] = useState(10);

  
//   return (
//     <div>
//       <h1>{props.question}</h1>
//       <p>{timeRemaining} seconds remaining</p>
//       <ul>
//         {props.options.map(option => (
//           <li key={option}>
//             <button onClick={() => props.onAnswered(option === props.answer)}>
//               {option}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Question;

