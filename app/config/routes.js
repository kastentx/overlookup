var React = require('react')
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute
var hashHistory = ReactRouter.hashHistory
var Main = require('../components/Main')
var HomeContainer = require('../containers/HomeContainer')
var Intro	= require('../components/Intro')

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Intro} />
			<Route path='/playerLookup' component={HomeContainer} />
		</Route>
	</Router>
)

module.exports = routes;