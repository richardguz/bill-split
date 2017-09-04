import React from 'react';
import { connect } from 'react-redux';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    handleInStockInputChange(e) {
        console.log(this.props.inStockOnly);
        this.props.onInStockInput(e.target.checked);
    }

    render() {
        return (
            <form>
                <input type="text"
                        placeholder="search"
                        value={this.props.filterText}
                        onChange={this.handleFilterTextInputChange} />
                <br/>
                <input type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockInputChange} />
            </form>
        );
    }
}
