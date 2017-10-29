import React from 'react';
import PropTypes from 'prop-types';

export class DebtsTable extends React.Component {

  calcP2pDebt(debtor, creditor) {
    const {items} = this.props;
    var total = 0;
    if (debtor.toLowerCase() == creditor.toLowerCase()) {
      return 0;
    }
    items.map((item) => {
      if (item.buyer.toLowerCase() == creditor.toLowerCase()) {
        item.whoOwes.map((name) => {
          if (name == debtor) {
            total += item.splitCost;
          }
        });
      }
    });

    return total;
  }

  render(){
    const {people} = this.props;

    return (
      <table className="Debts-table">
        <thead>
          <tr>
            <th>     </th>
            {people.map((person) =>
              <th key={person}>{person}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {people.map((personA) =>
            <tr key={personA}>
              <th>{personA}</th>
              {people.map((personB) =>
                <td key={personB}>{this.calcP2pDebt(personA, personB)}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

DebtsTable.propTypes = {
  people: PropTypes.array,
  items: PropTypes.array
};