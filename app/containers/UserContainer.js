var React = require('react')
var Prompt = require('../components/Prompt')
var User = require('../components/User')
var HalfWrapper = require('../components/HalfWrapper')
var styles = require('../styles')
var helpers = require('../utils/helpers')

var UserContainer = React.createClass({
  getInitialState: function() {
    return {
      playerOne: {
        text: '',
        player: {},
        isLoading: false
      },
      playerTwo: {
        text: '',
        player: {},
        isLoading: false
      }
    }
  },
  handlePlayerOneUpdate: function(e) {
    var player = this.state.playerOne.player
    var name = this.state.playerOne.name
    var isLoading = this.state.playerOne.isLoading
    this.setState({
      playerOne: {
        text: e.target.value,
        player: player,
        isLoading: isLoading
      }
    })
  },
  handlePlayerTwoUpdate: function(e) {
    var player = this.state.playerTwo.player
    var name = this.state.playerTwo.name
    var isLoading = this.state.playerTwo.isLoading
    this.setState({
      playerTwo: {
        text: e.target.value,
        player: player,
        isLoading: isLoading
      }
    })
  },
  handlePlayerOneSubmit: function(e) {
    e.preventDefault()
    var username = this.state.playerOne.text
    var player = this.state.playerOne.player
    this.setState({
      playerOne: {
        text: '',
        player: player,
        isLoading: true
      }
    })
    helpers.getBattleTagData(username)
    .then(function(userData) {
      this.setState({
        playerOne: {
          text: '',
          player: userData,
          isLoading: false
        }
      })
    }.bind(this))    
  },
  handlePlayerTwoSubmit: function(e) {
    e.preventDefault()
    var username = this.state.playerTwo.text
    var player = this.state.playerTwo.player
    this.setState({
      playerTwo: {
        text: '',
        player: player,
        isLoading: true
      }
    })
    helpers.getBattleTagData(username)
    .then(function(userData) {
      this.setState({
        playerTwo: {
          text: '',
          player: userData,
          isLoading: false
        }
      })
    }.bind(this))    
  },
  render: function() {
    return (
    <div className='col-sm-12'>
      <HalfWrapper> 
        <User 
          playerData={this.state.playerOne.player}
          searchText={this.state.playerOne.text}
          isLoading={this.state.playerOne.isLoading}
          onUpdateTag={this.handlePlayerOneUpdate}
          onSubmitTag={this.handlePlayerOneSubmit} />
      </HalfWrapper>
      <HalfWrapper>
        <User 
          playerData={this.state.playerTwo.player}
          searchText={this.state.playerTwo.text}
          isLoading={this.state.playerTwo.isLoading}
          onUpdateTag={this.handlePlayerTwoUpdate}
          onSubmitTag={this.handlePlayerTwoSubmit} />
      </HalfWrapper>
    </div>
    )
  }
})

module.exports = UserContainer