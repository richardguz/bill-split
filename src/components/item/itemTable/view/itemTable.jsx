import React from 'react';
import PropTypes from 'prop-types';
import { view as ItemRow } from '../../itemRow';

export class ItemTable extends React.Component {
  render(){
    var rows = [];
    this.props.items.forEach((item) => {
      rows.push(<ItemRow item={item}
      key={item.id} />);
    });
    return (
      <table className="Item-table-border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Buyer</th>
            <th>Who Owes</th>
            <th>Divided Cost</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

ItemTable.propTypes = {
  items: PropTypes.array
};