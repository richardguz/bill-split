import React from 'react';
import PropTypes from 'prop-types';

export class ItemRow extends React.Component {
  render() {
    var name = this.props.item.name;
    var cost = this.props.item.cost;
    var whoPaid = this.props.item.buyer;
    var splitCost = this.props.item.splitCost;
    return (
      <tr>
        <td>
          {name}
        </td>
        <td>
          {cost}
        </td>
        <td>
          {whoPaid}
        </td>
        <td>
          {this.props.item.whoOwes.map((person, i) =>
            <span key={i}>{person} </span>
          )}
        </td>
        <td>
          {splitCost}
        </td>
      </tr>
    );
  }
}

ItemRow.propTypes = {
  item: PropTypes.object
};