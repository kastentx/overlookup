var React = require('react')
var PropTypes = React.PropTypes

function UserInfo(props) {
  return (
    <div>
      <pre>{JSON.stringify(props.data)}</pre>
    </div>
  )
}

UserInfo.propTypes = {
  data: PropTypes.object.isRequired
}

module.exports = UserInfo