export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';
export const ClOSE_MODAL ='ClOSE_MODAL';

export const MODAL_STATES = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED'
};

/*
 * action creators
 */

export function toggleModal() {
  return { type: TOGGLE_MODAL };
}

export function closeModal() {
  return { type: ClOSE_MODAL };
}

export function openModal() {
  return { type: OPEN_MODAL };
}
