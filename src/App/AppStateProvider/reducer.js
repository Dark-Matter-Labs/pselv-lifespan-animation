export default function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_ANIMATION_STATE":
      console.log("yo");
      return {
        ...state,
        animationState: payload,
      };

    default:
      return state;
  }
}
