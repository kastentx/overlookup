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
        name: '',
        data: {},
        isLoading: false
      },
      playerTwo: {
        text: '',
        name: '',
        data: {},
        isLoading: false
      }
    }
  },
  handlePlayerOneUpdate: function(e) {
    var data = this.state.playerOne.data
    var name = this.state.playerOne.name
    var isLoading = this.state.playerOne.isLoading
    this.setState({
      playerOne: {
        text: e.target.value,
        name: name,
        data: data,
        isLoading: isLoading
      }
    })
  },
  handlePlayerTwoUpdate: function(e) {
    var data = this.state.playerTwo.data
    var name = this.state.playerTwo.name
    var isLoading = this.state.playerTwo.isLoading
    this.setState({
      playerTwo: {
        text: e.target.value,
        name: name,
        data: data,
        isLoading: isLoading
      }
    })
  },
  handlePlayerOneSubmit: function(e) {
    e.preventDefault()
    var username = this.state.playerOne.text
    var data = this.state.playerOne.data
    this.setState({
      playerOne: {
        text: '',
        name: username,
        data: data,
        isLoading: true
      }
    })
    helpers.getBattleTagData(username)
    .then(function(userData) {
      this.setState({
        playerOne: {
          text: '',
          name: username,
          data: userData,
          isLoading: false
        }
      })
    }.bind(this))    
  },
  handlePlayerTwoSubmit: function(e) {
    e.preventDefault()
    var username = this.state.playerTwo.text
    helpers.getBattleTagData(username)
    .then(function(userData) {
      this.setState({
        playerTwo: {
          text: '',
          name: username,
          data: userData,
          isLoading: false
        }
      })
    }.bind(this))    
  },
  render: function() {
    return (
    <div className='col-sm-12' style={styles.testBg}>
      <HalfWrapper> 
        <User 
          playerData={this.state.playerOne.data}
          battleTag={this.state.playerOne.name}
          searchText={this.state.playerOne.text}
          isLoading={this.state.playerOne.isLoading}
          onUpdateTag={this.handlePlayerOneUpdate}
          onSubmitTag={this.handlePlayerOneSubmit}/>
      </HalfWrapper>
      <HalfWrapper>
        <User 
          playerData={this.state.playerTwo.data}
          battleTag={this.state.playerTwo.name}
          searchText={this.state.playerTwo.text}
          isLoading={this.state.playerTwo.isLoading}
          onUpdateTag={this.handlePlayerTwoUpdate}
          onSubmitTag={this.handlePlayerTwoSubmit}/>
      </HalfWrapper>
    </div>
    )
  }
})

module.exports = UserContainer