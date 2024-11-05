

const Options = ({updateFeedback, handleReset, totalFeedback = 0}) => {
  return (
    <div>
      <section>
        <button onClick={() => updateFeedback('good')}>good</button>
        <button onClick={() => updateFeedback('neutral')}>neutral</button>
        <button onClick={() => updateFeedback('bad')}>bad</button>
        {totalFeedback > 0 && (<button onClick={() => handleReset()}>reset</button>)}
        
      </section>
    </div>
  )
}

export default Options


{/* {Object.keys(counter).map(option => (<button key={option} onClick={() => hendelClick(option)}>{option}</button>))} */}