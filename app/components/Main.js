var React = require('react')
var PropTypes = React.PropTypes

function Main(props) {
	return (
		<div>
			{props.children}
		</div>
	)
}

module.exports = Main