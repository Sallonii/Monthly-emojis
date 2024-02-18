import {Component} from 'react'

import Calender from '../Calender'
import EmojiCard from '../EmojiCard'
import CounterCard from '../CounterCard'

import './index.css'

class MonthlyEmojis extends Component {
  state = {activeEmoji: 'Very Happy'}

  emojiClicked = emojiName => {
    this.setState({activeEmoji: emojiName})
  }

  render() {
    const {initialDatesList, emojisList} = this.props
    const {activeEmoji} = this.state

    return (
      <div className="bg">
        <h1 className="main-heading">Monthly Emojis</h1>
        <div className="main-container">
          <Calender
            initialDatesList={initialDatesList}
            activeEmoji={activeEmoji}
            emojisList={emojisList}
          />
          <div>
            <ul className="emoji-card">
              {emojisList.map(eachItem => (
                <EmojiCard
                  emojisItem={eachItem}
                  key={eachItem.id}
                  activeEmoji={activeEmoji}
                  emojiClicked={this.emojiClicked}
                />
              ))}
            </ul>
            <CounterCard />
          </div>
        </div>
      </div>
    )
  }
}

export default MonthlyEmojis
