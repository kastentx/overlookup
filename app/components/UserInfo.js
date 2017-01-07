var React = require('react')
var PropTypes = React.PropTypes

function puke(content) {
  return <pre>{JSON.stringify(content)}</pre>
}

function UserInfo(user) {
  if(user.isLoading === true) {
    return <div>LOADING</div>
  }

  return (
    <div className='col-sm-10'>
      <ul className='list-group'>
      {!!user.battleTag && <li className='list-group-item'><h3>BattleTag: {user.battleTag}</h3></li>}
      </ul>
    </div>
  )
}

UserInfo.propTypes = {  
  isLoading: PropTypes.bool.isRequired,
  battleTag: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

module.exports = UserInfo