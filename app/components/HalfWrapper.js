var React = require('react')

function HalfWrapper(props) {
  return (
    <div className='col-sm-6'>
      {props.children}
    </div>
  )
}

module.exports = HalfWrapper