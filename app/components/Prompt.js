var React = require('react')
var PropTypes = React.PropTypes

function Prompt(props) {
  return (
    <div className='row'>
      <form onSubmit={props.onSubmitTag}>
        <div className="form-group col-sm-8">
          <input
            onChange={props.onUpdateTag}
            value={props.battleTag}
            className="form-control"
            placeholder="NAME-1234"
            type="text" />
        </div>
        <div className="form-group col-sm-4">
          <button className="btn btn-primary" type="submit">Lookup</button>
        </div>
      </form>
    </div>
  )
}

Prompt.PropTypes = {
  searchText: PropTypes.string,
  onUpdateTag: PropTypes.func.isRequired,
  onSubmitTag: PropTypes.func.isRequired
}

module.exports = Prompt       