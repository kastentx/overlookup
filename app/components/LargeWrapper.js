var React = require('react')
var transparentBg = require('../styles').transparentBg

function LargeWrapper(props) {
	return (
		<div className='jumbotron col-sm-8 col-sm-offset-2 text-center' style={transparentBg}>
			{props.children}
		</div>
	)	
}

module.exports = LargeWrapper
