var React = require('react')
var PropTypes = React.PropTypes
var Prompt = require('./Prompt')
var UserInfo = require('./UserInfo')
var styles = require('../styles')

function User(props) {
  return (
    <div>
      <div className='text-left'>
        <p className='lead'>Enter a BattleTag:</p>
        <Prompt 
          value={props.searchText}
          onUpdateTag={props.onUpdateTag}
          onSubmitTag={props.onSubmitTag} />
      </div>
      <div className='text-center' style={styles.space}>
        <UserInfo 
          isLoading={props.isLoading}
          player={props.playerData} />
      </div>
    </div>
  )
}

User.propTypes= {
  isLoading: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  onUpdateTag: PropTypes.func.isRequired,
  onSubmitTag: PropTypes.func.isRequired,
  playerData: PropTypes.object.isRequired
}

module.exports = User

