
const Feedback = ({counter, totalFeedback, positiveFeedback}) => {
  return (
    <div>
      <ul>
        <li>Good: {counter.good}</li>
        <li>Neutral: {counter.neutral}</li>
        <li>Bad: {counter.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  )
}

export default Feedback