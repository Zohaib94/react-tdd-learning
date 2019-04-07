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
          <input type='text' className='person-input' onChange={(event) => {
            this.setState({
              person: event.target.value
            })
          }} />
        </form>
      </div>
    )
  }
}
