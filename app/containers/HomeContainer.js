var React = require('react')
var Home = require('../components/Home')

var HomeContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			welcomeMessage: 'Look somebody up, and compare them with a second somebody!'
		}
	},
	render: function() {
		return (
			<Home text={this.state.welcomeMessage} />
		)
	}
})

module.exports = HomeContainer