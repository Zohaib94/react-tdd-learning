import React, { Component } from 'react';

export default class Gift extends Component {
  state = {
    person: '',
    present: ''
  }

  render() {
    return (
      <div>
        <form>
          <label>Person:</label>
          <input type='text' className='person-input' onChange={(event) => {
            this.setState({
              person: event.target.value
            })
          }} />

          <label>Present:</label>
          <input type='text' className='present-input' onChange={(event) => {
            this.setState({
              present: event.target.value
            })
          }} />
        </form>
      </div>
    )
  }
}
