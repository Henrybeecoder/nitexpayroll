export const reducer = (state, action) => {
  if (action.type === 'VALID_EMAIL') {
    return { ...state, isModalOpen: false };
  }
   if (action.type === 'INVALID_EMAIL') {
    return { ...state, isModalOpen: true, modalContent: 'Your email is invalid' };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }

  throw new Error('no matching action type');
};