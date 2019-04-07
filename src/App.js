import React, { Component } from 'react'
import Gift from './Gift'

class App extends Component {
  state = {
    gifts: []
  }

  addGift = () => {
    let { gifts } = this.state
    gifts.push({ id: gifts.length })
    this.setState({ gifts })
  }

  removeGift = (id) => {
    let { gifts } = this.state
    const newGifts = gifts.filter(gift => gift.id != id)
    this.setState({ gifts: newGifts })
  }

  render() {
    let { gifts } = this.state;

    return (
      <div>
        <h2>This is a testing application</h2>
        <button className='add-gift' onClick={this.addGift}>
          Add Gift
        </button>
        <div className='gift-list'>
          {
            gifts.map((gift) => (
              <div key={gift.id}>
                <Gift giftId={gift.id} removeGiftHandler={this.removeGift} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default App;
