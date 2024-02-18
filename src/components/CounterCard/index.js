import './index.css'

const CounterCard = props => {
  const {daysList} = props
  return (
    <div className="counter-container">
      <ul>
        <select className="select-container">
          <option value="Very Happy">Very Happy</option>
          <option value="Happy">Happy</option>
          <option value="Neutral">Neutral</option>
          <option value="Sad">Sad</option>
          <option value="Very Sad">Very Sad</option>
        </select>
        <select className="select-container">
          <option value="Sun">Sun</option>
          <option value="Mon">Mon</option>
          <option value="Tue">Tue</option>
          <option value="Wed">Wed</option>
          <option value="Thu">Thu</option>
          <option value="Fri">Fri</option>
          <option value="Sat">Sat</option>
        </select>
      </ul>
      <h1>Count</h1>
    </div>
  )
}

export default CounterCard
