var React = require('react')
var PropTypes = React.PropTypes

function puke(content) {
  return <pre>{JSON.stringify(content)}</pre>
}

function UserInfo(props) {
  if(props.isLoading === true) {
    return <div>LOADING</div>
  }

  return (
    <div className='col-sm-10'>
      <ul className='list-group'>
        {!!props.player.name && <li className='list-group-item'><img src={props.player.avatar} className='img-rounded'/></li>}
        {!!props.player.name && <li className='list-group-item'><h5>BattleTag: </h5><p className='lead'>{props.player.name}</p></li>}
        {!!props.player.name && <li className='list-group-item'><h5>Competitive Rank: </h5><p className='lead'>{props.player.comprank}</p></li>}
        {!!props.player.name && <li className='list-group-item'><h5>Quickplay Wins: </h5><p className='lead'>{props.player.wins}</p></li>}
        {!!props.player.name && <li className='list-group-item'><h5>Average Damage: </h5><p className='lead'>{props.player.damage}</p></li>}
        {!!props.player.name && <li className='list-group-item'><h5>Average Healing: </h5><p className='lead'>{props.player.heals}</p></li>}
      </ul>
    </div>
  )
}

UserInfo.propTypes = {  
  isLoading: PropTypes.bool.isRequired,
  player: PropTypes.object.isRequired
}

module.exports = UserInfo