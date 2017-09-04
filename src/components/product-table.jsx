import React from 'react';
import { connect } from 'react-redux';
import { ProductRow } from './product-row';
import { ProductCategoryRow } from './product-category-row';

export class ProductTable extends React.Component {
  render(){
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach((product) => {
            if ((product.name.indexOf(this.props.filterText) === -1) || 
                (this.props.inStockOnly && !product.stocked)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product={product}
                                    key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}