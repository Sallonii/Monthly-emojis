import './index.css'

const EmojiCard = props => {
  const {emojisItem, activeEmoji, emojiClicked} = props
  const {id, emojiName, emojiUrl} = emojisItem

  const onClickingEmoji = () => {
    emojiClicked(emojiName)
  }

  const activeEmojiClassName =
    activeEmoji === emojiName ? 'emoji-image active-emoji' : 'emoji-image'
  return (
    <li className="emoji-container">
      <button type="button" className="emoji-btn">
        {emojiName}
        <img
          src={emojiUrl}
          alt={emojiName}
          className={activeEmojiClassName}
          onClick={onClickingEmoji}
        />
      </button>
    </li>
  )
}

export default EmojiCard
