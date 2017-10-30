export const TOGGLE_MODAL = 'TOGGLE_MODAL';

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
