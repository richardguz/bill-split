import { connect } from 'react-redux';
import { PersonInput as view } from  './view/personInput';
import { toggleModal } from '../basePage/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(toggleModal());
    }
  };
};

const PersonInput = connect(
  null,
  mapDispatchToProps
)(view);

export default PersonInput;