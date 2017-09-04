import React from 'react';
import { connect } from 'react-redux';

export class ProductCategoryRow extends React.Component {
    render(){
        return(
            <tr>
                <th colSpan="2">
                    {this.props.category}
                </th>
            </tr>
        );
    }
}