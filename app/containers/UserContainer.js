var React = require('react')
var Prompt = require('../components/Prompt')
var User = require('../components/User')
var HalfWrapper = require('../components/HalfWrapper')
var styles = require('../styles')

var UserContainer = React.createClass({
  getInitialState: function() {
    return {
      user: playerData,
      playerOne: {
        text: '',
        data: '',
        isLoading: false
      },
      playerTwo: {
        text: '',
        data: '',
        isLoading: false
      }
    }
  },
  handlePlayerOneUpdate: function(e) {
    this.setState({
      playerOne: {
        text: e.target.value
      }
    })
  },
  handlePlayerTwoUpdate: function(e) {
    this.setState({
      playerTwo: {
        text: e.target.value
      }
    })
  },
  handlePlayerOneSubmit: function(e) {
    e.preventDefault()

  },
  handlePlayerTwoSubmit: function(e) {
    e.preventDefault()
    
  },
  render: function() {
    return (
    <div className='col-sm-12' style={styles.testBg}>
      <HalfWrapper> 
        <User 
          playerData={this.state.playerOne.data}
          battleTag={this.state.playerOne.text}
          onUpdateTag={this.handlePlayerOneUpdate}
          onSubmitTag={this.handleSubmitTag('playerOne')}/>
      </HalfWrapper>
      <HalfWrapper>
        <User 
          playerData={this.state.playerTwo.data}
          battleTag={this.state.playerTwo.text}
          onUpdateTag={this.handlePlayerTwoUpdate}
          onSubmitTag={this.handleSubmitTag('playerTwo')}/>
      </HalfWrapper>
    </div>
    )
  }
})

module.exports = UserContainer