import React, { Component } from 'react'

class AddEventsClass extends Component {

    clickHandler(){
        alert('Button Clicked')
    }


  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default AddEventsClass