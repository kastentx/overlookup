var React = require('react')
var PropTypes = React.PropTypes

function Prompt(props) {
  return (
    <form onSubmit={props.onSubmitTag}>
      <div className="form-group col-sm-8">
        <input
          onChange={props.onUpdateTag}
          value={props.battleTag}
          className="form-control"
          placeholder="BattleTag"
          type="text" />
      </div>
      <div className="form-group col-sm-4">
        <button
          className="btn btn-primary"
          type="submit">
            Lookup
        </button>
      </div>
    </form>
  )
}

Prompt.PropTypes = {
  battleTag: PropTypes.string,
  onUpdateTag: PropTypes.func.isRequired,
  onSubmitTag: PropTypes.func.isRequired
}

module.exports = Prompt       