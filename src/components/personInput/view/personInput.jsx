import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheet/personInput.scss';

export class PersonInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      personName: ''
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    const {onPeopleInput, closeModal} = this.props;
    const {personName} = this.state;

    if (personName === '') {
      debugger;
      closeModal();
      return;
    }

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
    const {closeModal} = this.props;

    return (
      <div className="PersonInput">
        <form onSubmit={this.updateState}>
          <input type="text"
            placeholder="Person's Name"
            name="name"
            onChange={evt => this.updateInputValue(evt)} />
          <button className='PersonInput__submit'>Submit</button>
        </form>
        <button onClick={() => closeModal()} className="PersonInput__close">Close</button>
      </div>
    );
  }
}

PersonInput.propTypes = {
  onPeopleInput: PropTypes.func,
  closeModal: PropTypes.func
};