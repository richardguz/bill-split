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

function closeModal(state = initialState) {
  return {
    ...state,
    modalOpen: false
  };
}

function openModal(state = initialState) {
  return {
    ...state,
    modalOpen: true
  };
}

const basePage = combineReducers({
  toggleModal,
  closeModal,
  openModal
});

export default basePage;