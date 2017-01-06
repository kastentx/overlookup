var React = require('react')
var PropTypes = React.PropTypes
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

User.propTypes= {
  battleTag: PropTypes.string.isRequired,
  onUpdateTag: PropTypes.func.isRequired,
  onSubmitTag: PropTypes.func.isRequired,
  playerData: PropTypes.object.isRequired
}

module.exports = User

