import alertActions from "../actions/alertAction";

const iniState = {
  showAlertMessage: false,
  alertMessageContent: null,
};

const reducer = (state = iniState, action) => {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: action.content,
      };
    case alertActions.CLOSE_ALERT_MESSAGE:
      return { ...state, showAlertMessage: false };
    default:
      return state;
  }
};

export default reducer;
