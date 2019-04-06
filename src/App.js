import React, { Component } from 'react'

class App extends Component {
  state = {
    gifts: []
  }

  addGift = () => {
    let { gifts } = this.state
    gifts.push({ id: gifts.length })
    this.setState({ gifts })
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
                Gift #{gift.id}
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default App;
