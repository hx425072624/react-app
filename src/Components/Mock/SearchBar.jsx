import React from "react";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.changeInput = this.changeInput.bind(this);
    this.changeCheck = this.changeCheck.bind(this);
  }
  changeInput(e) {
    this.props.onChangeInput(e.target.value);
  }
  changeCheck(e) {
    this.props.onChangeCheck(e.target.checked);
  }
  render() {
    const val = this.props.inputValue;
    const checked = this.props.checked;
    return (
      <div>
        <input type="text" onChange={this.changeInput} value={val} />
        <div>
          <input
            type="checkbox"
            onChange={this.changeCheck}
            checked={checked} id="checkbox" name="checkbox"
          />

          <label htmlFor="checkbox">Only show products in stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
