var React = require('react')
var Prompt = require('./Prompt')
var UserInfo = require('./UserInfo')
var styles = require('../styles')

function User(props) {
  return (
    <div style={styles.space}>
      <Prompt 
        battleTag={props.battleTag}
        onUpdateTag={props.onUpdateTag}
        onSubmitTag={props.onSubmitTag}/>
      <UserInfo 
        data={props.playerData}/>
    </div>
  )
}

module.exports = User

