import { combineReducers } from 'redux';
import {
 TOGGLE_MODAL
} from './actions';

let initialState = {
  modalOpen: false
};

function toggleModal(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen
      };
    default:
      return state;
  }
}

const basePage = combineReducers({
  toggleModal
});

export default basePage;