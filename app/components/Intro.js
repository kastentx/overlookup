var React = require('react')
var styles = require('../styles')

var Intro = React.createClass({
  render: function() {
    return (
      <div className='jumbotron sm-col-8 sm-col-offset-2 text-center' style={styles.transparentBg}>
      	<h1>welcome to overlook</h1>
      	<h3 style={{color: 'gray'}}>click to begin...</h3>
      	<button type='button' className='btn btn-large btn-success' style={styles.space}>Let's Go!</button>
      </div>
    )
  }
})

module.exports = Intro