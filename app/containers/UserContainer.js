var React = require('react')
var Prompt = require('../components/Prompt')
var User = require('../components/User')
var HalfWrapper = require('../components/HalfWrapper')
var styles = require('../styles')

var playerData = {
  name: 'Joe Blow',
  rank: 42
}

var UserContainer = React.createClass({
  getInitialState: function() {
    return {
      user: playerData,
      playerOne: '',
      playerTwo: ''
    }
  },
  handleUpdateTag: function(key) {
    return function(e) {
      var state = {}
      state[key] = e.target.value
      this.setState(state)
    }.bind(this)
  },
  handleSubmitTag: function(key) {

  },
  render: function() {
    return (
    <div className='col-sm-12' style={styles.testBg}>
      <HalfWrapper> 
        <User 
          playerData={this.state.user}
          battleTag={this.state.playerOne}
          onUpdateTag={this.handleUpdateTag('playerOne')}
          onSubmitTag={this.handleSubmitTag('playerOne')}/>
      </HalfWrapper>
      <HalfWrapper>
        <User 
          playerData={this.state.user}
          battleTag={this.state.playerTwo}
          onUpdateTag={this.handleUpdateTag('playerTwo')}
          onSubmitTag={this.handleSubmitTag('playerTwo')}/>
      </HalfWrapper>
    </div>
    )
  }
})

module.exports = UserContainer