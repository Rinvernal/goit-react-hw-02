import { useEffect, useState } from "react";
import Description from "./Description"
import Options from "./Options/Options"
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
// {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }
const App = () => {
  const [counter, setCounter] = useState(
  () => {
    const savedData = localStorage.getItem('counter')
    return savedData ? JSON.parse(savedData) : {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  }
);
  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter))
  }, [counter])

  const updateFeedback = feedbackType => {
    setCounter(prev => ({
      ...prev, [feedbackType]: prev[feedbackType]+1
    }))
  }

  const handleReset = () => {
    setCounter({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = counter.good + counter.neutral + counter.bad;
  const positiveFeedback = Math.round((counter.good / totalFeedback) * 100)
  const valid = totalFeedback > 0;

  return (
    <div>
      <Description />
      <Options updateFeedback = {updateFeedback} handleReset = {handleReset} totalFeedback = {totalFeedback}/>
      {valid ? <Feedback counter = {counter} totalFeedback = {totalFeedback} positiveFeedback = {positiveFeedback}/> : <Notification />}
      
    </div>
  )
}

export default App


