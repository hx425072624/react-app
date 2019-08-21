import React, { Fragment } from "react";
function groupBy(array, f) {
  const groups = {};
  array.forEach(function(o) {
    const group = JSON.stringify(f(o));
    console.log(group);
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return groups;
}

function ProductCategoryRow(props) {
  return (
    <tr>
      <td>{props.category}</td>
    </tr>
  );
}
class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const name = this.props.name;
    const price = this.props.price;
    const checked = this.props.checked;
    return (
      <tr>
        <td>{name}</td>
        {checked && <td>{price}</td>}
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const inputValue = this.props.inputValue;
    const checked = this.props.checked;
    const products = this.props.products;
    const filteredProducts = products.map(function(item) {
      if ((inputValue && item.name.indexOf(inputValue) > -1) || !inputValue) {
        return item;
      }
      return null;
    });
    console.log(filteredProducts);
    const sortedProducts = groupBy(filteredProducts.filter(d => d), function(
      item
    ) {
      if (item) return item.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            {checked && <th>Price</th>}
          </tr>
        </thead>
        <tbody>
          {Object.keys(sortedProducts).map(function(product) {
            return (
              <Fragment key={product}>
                <ProductCategoryRow category={product} key={product} />
                {sortedProducts[product].map(it => {
                  return (
                    <ProductRow
                      name={it.name}
                      price={it.price}
                      checked={checked}
                      key={it.name}
                    />
                  );
                })}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
