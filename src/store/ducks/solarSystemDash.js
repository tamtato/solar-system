const SET_SOLAR_SYSTEM_DATA = "SET_SOLAR_SYSTEM_DATA";

const initialState = {
  solarSystemData: []
};

export const getSolarSystemData = filter => {
  return dispatch => {
    return dispatch(setSolarSystemData("data"));
  };
};

export const sortSolarSystemData = sort => {
  return dispatch => {
    return dispatch(setSolarSystemData("data"));
  };
};

const setSolarSystemData = data => {
  return {
    type: SET_SOLAR_SYSTEM_DATA,
    data
  };
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SOLAR_SYSTEM_DATA:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
