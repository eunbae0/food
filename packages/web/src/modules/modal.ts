import { createStore, AnyAction, Store } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

const OPEN = 'modal/OPEN';
const CLOSE = 'modal/CLOSE';

export type modalState = {
  isOpen: boolean;
};

const initialModal = { isOpen: false };

export const openModal = () => ({ type: OPEN });
export const closeModal = () => ({ type: CLOSE });

export default function modal(
  state: modalState = initialModal,
  action: AnyAction,
) {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case OPEN:
      return { ...state, isOpen: true };
    case CLOSE:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}
