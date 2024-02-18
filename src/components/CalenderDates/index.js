import './index.css'

const CalenderDates = props => {
  const {dateItemDetails, dateSelected} = props
  const {id, date, emojiUrl, emojiName} = dateItemDetails

  const haveUrl = emojiUrl !== ''

  const onSelectingDate = () => {
    dateSelected(id, emojiName)
  }

  return (
    <li className="date-items" onClick={onSelectingDate}>
      <button type="button" className="date-btn">
        <p>{date}</p>
      </button>
      {haveUrl && (
        <img src={emojiUrl} alt={emojiName} className="calender-emoji-image" />
      )}
    </li>
  )
}

export default CalenderDates
