var React = require('react')

function UserInfo(props) {
  return (
    <div>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  )
}

module.exports = UserInfo