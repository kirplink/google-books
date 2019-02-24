import React from "react";

const Search = (props) => {
    return (
        <div className="form-group">
          <input class="form-input m-2" type="text" onChange={props.onChange} value={props.value} />
          <input type="submit" id="submit" value="submit" className="btn btn-primary m-2" onClick={props.onClick}/>
        </div>
    )
}

export default Search;