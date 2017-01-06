var React = require('react')
var Prompt = require('../components/Prompt')
var User = require('../components/User')
var HalfWrapper = require('../components/HalfWrapper')
var styles = require('../styles')

var UserContainer = React.createClass({
  getInitialState: function() {
    return {
      playerOne: {
        text: '',
        data: {},
        isLoading: false
      },
      playerTwo: {
        text: '',
        data: {},
        isLoading: false
      }
    }
  },
  handlePlayerOneUpdate: function(e) {
    data = this.state.playerOne.data
    this.setState({
      playerOne: {
        text: e.target.value,
        data: data
      }
    })
  },
  handlePlayerTwoUpdate: function(e) {
    data = this.state.playerTwo.data
    this.setState({
      playerTwo: {
        text: e.target.value,
        data: data
      }
    })
  },
  handlePlayerOneSubmit: function(e) {
    e.preventDefault()
    var username = this.state.playerOne.text
    this.setState({
      playerOne: {
        text: '',
        data: {
          name: username
        },
        isLoading: true
      }
    })
  },
  handlePlayerTwoSubmit: function(e) {
    e.preventDefault()
    var username = this.state.playerTwo.text
    this.setState({
      playerTwo: {
        text: '',
        data: {
          name: username
        },
        isLoading: true
      }
    })
  },
  render: function() {
    return (
    <div className='col-sm-12' style={styles.testBg}>
      <HalfWrapper> 
        <User 
          playerData={this.state.playerOne.data}
          battleTag={this.state.playerOne.text}
          onUpdateTag={this.handlePlayerOneUpdate}
          onSubmitTag={this.handlePlayerOneSubmit}/>
      </HalfWrapper>
      <HalfWrapper>
        <User 
          playerData={this.state.playerTwo.data}
          battleTag={this.state.playerTwo.text}
          onUpdateTag={this.handlePlayerTwoUpdate}
          onSubmitTag={this.handlePlayerTwoSubmit}/>
      </HalfWrapper>
    </div>
    )
  }
})

module.exports = UserContainer