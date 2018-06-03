//action constants
export const RESET = 'RESET';
export const UPDATE_BACKGROUND = 'UPDATE_BACKGROUND';

export const resetBackground = () => ({
  type: RESET,
});

export const updateBackground = payload => ({
  type: UPDATE_BACKGROUND,
  payload,
});