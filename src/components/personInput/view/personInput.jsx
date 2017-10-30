import React from 'react';
import PropTypes from 'prop-types';

export class PersonInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    const {onPeopleInput, closeModal} = this.props;

    e.preventDefault();
    onPeopleInput(this.state.personName);
    this.setState({
      personName: ''
    });

    closeModal();
  }

  updateInputValue(evt) {
    this.setState({
      personName: evt.target.value
    });
  }

  render(){
    return (
      <form className="personInput" onSubmit={this.updateState}>
        <input type="text"
          placeholder="Person's Name"
          name="name"
          onChange={evt => this.updateInputValue(evt)} />
        <button>Submit</button>
      </form>
    );
  }
}

PersonInput.propTypes = {
  onPeopleInput: PropTypes.func,
  closeModal: PropTypes.func
};