import { connect } from 'react-redux';
import { BasePage as view } from './view/basePage';
import { toggleModal } from './actions';

const mapStateToProps = (state) => {
  return {
    ...state.toggleModal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOpenModal: () => {
      dispatch(toggleModal());
    }
  };
};

const BasePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(view);

export default BasePage;