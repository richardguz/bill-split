import React from 'react';
import { connect } from 'react-redux';
import { SearchBar } from './search-bar';
import { ProductTable } from './product-table';

export class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterText: '', inStockOnly: false};
        
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }
  
    handleInStockInput(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        });
    }

    render() {
        return (
            <div>
                <SearchBar inStockOnly={this.state.inStockOnly} 
                            filterText={this.state.filterText}
                            onFilterTextInput={this.handleFilterTextInput}
                            onInStockInput={this.handleInStockInput} />
                <ProductTable products={this.props.products}
                                inStockOnly={this.state.inStockOnly} 
                                filterText={this.state.filterText} />
            </div>
        );
    }
}