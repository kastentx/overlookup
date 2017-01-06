var React = require('react')
var Prompt = require('./Prompt')
var UserInfo = require('./UserInfo')

function User(props) {
  return (
    <div>
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

