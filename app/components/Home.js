var React = require('react')
var PropTypes = React.PropTypes
var LargeWrapper = require('./LargeWrapper')
var UserContainer = require('../containers/UserContainer')

function Home(props) {
	return (
		<LargeWrapper>
			<p className='lead'>{props.text}</p>	
			<UserContainer/>
		</LargeWrapper>
	)
}

Home.propTypes = {
  lead: PropTypes.string
}

module.exports = Home