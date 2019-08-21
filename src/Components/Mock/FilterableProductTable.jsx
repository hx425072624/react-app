import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.changeCheck = this.changeCheck.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.state = {
      checked: false,
      inputValue: ""
    };
  }
  changeCheck(checked) {
    this.setState({
      checked: checked
    });
  }
  changeInput(value) {
    this.setState({
      inputValue: value
    });
  }
  render() {
    const inputValue = this.state.inputValue;
    const checked = this.state.checked;
    const products = this.props.products;
    return (
      <div>
        <SearchBar
          onChangeCheck={this.changeCheck}
          inputValue={inputValue}
          checked={checked}
          onChangeInput={this.changeInput}
        />
        <ProductTable
          checked={!checked}
          inputValue={inputValue}
          products={products}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
