import React from 'react';
import PropTypes from 'prop-types';

export class ItemInput extends React.Component {
  constructor(props) {
    super(props);
    const {people} = this.props;
    this.state = {
      cost: '',
      name: '',
      buyer: ''
    };

    people.map((person) => this.setState({
      [person.toLowerCase()]: 'off'
    }));
    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    const {people, items} = this.props;
    var cost, splitCost, whoOwes;

    e.preventDefault();
    whoOwes = [];
    people.map((person) => {
      if (this.state[person.toLowerCase()] === 'on') {
        whoOwes.push(person);
      }
    });

    if (whoOwes.length == 0) {
      alert('Please select who owes for this item');
      return;
    }

    cost = parseInt(this.state.cost) | 0;
    splitCost = cost / whoOwes.length;
    this.props.onItemInput({
      category: 'Food',
      cost: cost,
      name: this.state.name,
      buyer: this.state.buyer,
      whoOwes: whoOwes,
      splitCost: splitCost,
      id: items.length + 1
    });

    this.setState({
      cost: '',
      name: '',
      buyer: ''
    });

    people.map((person) => this.setState({
      [person.toLowerCase()]: 'off'
    }));
  }

  updateInputValue(evt) {
    if (evt.target.name) {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }
  }
  render(){
    const {people} = this.props;
    return (
      <form className="Item-input" onSubmit={this.updateState}>
        <input type="text"
          placeholder="Item Name"
          name="name"
          value={this.state['name']}
          onChange={evt => this.updateInputValue(evt)}/>
        <input type="text"
          placeholder="Cost"
          name="cost"
          value={this.state['cost']}
          onChange={evt => this.updateInputValue(evt)}/>
        <input type="text"
          placeholder="Who Paid"
          name="buyer"
          value={this.state['buyer']}
          onChange={evt => this.updateInputValue(evt)}/>
        <br/>
        <table>
          <tbody>
            {people.map((person) =>
              <tr key={person}>
                <td>
                  <input type="checkbox" name={person.toLowerCase()} key={person}
                    checked={this.state[person.toLowerCase()] == 'on'}
                    onChange={evt => this.updateInputValue(evt)}/>
                </td>
                <td>
                  <label>{person}</label>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <br/>
        <button>Submit</button>
      </form>
    );
  }
}

ItemInput.propTypes = {
  people: PropTypes.array,
  items: PropTypes.array,
  onItemInput: PropTypes.func
};