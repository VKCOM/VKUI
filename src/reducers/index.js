const initialState = {
  panels: {
    animating: false,
    stack: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'PANELS_TRANSITION_PUSH':
    case 'PANELS_TRANSITION_POP':
      return state;

    case 'PANELS_TRANSITION_END':
      return state;

    default:
      return state;
  }
}