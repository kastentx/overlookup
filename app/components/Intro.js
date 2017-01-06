var React = require('react')
var styles = require('../styles')
var Link = require('react-router').Link
var LargeWrapper = require('./LargeWrapper')

function Intro(props) {
  return (
    <LargeWrapper>
      <h1>welcome to overlook</h1>
      <p className='lead' style={{color: 'gray'}}>click to begin...</p>
      <Link to='/playerLookup'>
        <button type='button' className='btn btn-large btn-success' style={styles.space}>Let's Go!</button>
      </Link>
    </LargeWrapper>
  )
}

module.exports = Intro