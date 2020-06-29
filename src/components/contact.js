import React from 'react';

class Contacts extends React.Component {
     onSubmit = () => {
    this.props.history.push('/')
  }
    render () {

        return(
            <>
            <h1>Contact</h1>
            <form>
            <input placeholder="name" type="name" />
            <input placeholder="email" type="email" />
            <button onClick={this.onSubmit}>Submit</button>
          </form>
          </>
        )
    }
}

export default Contacts