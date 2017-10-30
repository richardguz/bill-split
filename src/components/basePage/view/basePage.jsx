import React from 'react';
import Modal from 'react-modal';
import PropType from 'prop-types';
import { view as ItemTable } from '../../item/itemTable';
import { view as ItemInput } from '../../item/itemInput';
import { PersonInput } from '../../personInput';
import { view as DebtsTable } from '../../debtsTable';

export class BasePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {people: ['Bob', 'Alice'], items: []};
    this.handleItemInput = this.handleItemInput.bind(this);
    this.handlePeopleInput = this.handlePeopleInput.bind(this);
  }

  handlePeopleInput(person) {
    this.setState((prevState) => ({
      people: prevState.people.concat(person)
    }));
  }

  handleItemInput(item) {
    this.setState((prevState) => ({
      items: prevState.items.concat(item)
    }));
  }

  render() {
    const {modalOpen, handleOpenModal} = this.props;

    return (
      <div>
        <ItemTable items={this.state.items} people={this.state.people} />
        <ItemInput onPeopleInput={this.handlePeopleInput}
          onItemInput={this.handleItemInput}
          people={this.state.people}
          items={this.state.items}/>
        <button onClick={handleOpenModal}>Trigger Modal</button>
        <Modal isOpen={modalOpen} >
          <PersonInput onPeopleInput={this.handlePeopleInput}
            people={this.state.people}/>
        </Modal>
        <DebtsTable people={this.state.people}
          items={this.state.items}/>
      </div>
    );
  }
}

BasePage.propTypes = {
  handleOpenModal: PropType.func,
  modalOpen: PropType.bool
};