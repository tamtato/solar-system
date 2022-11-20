const SET_SOLAR_SYSTEM_DATA = "SET_SOLAR_SYSTEM_DATA";

const initialState = {
  solarSystemData: []
};

const baseUrl = "https://api.le-systeme-solaire.net/rest/bodies";

export const getSolarSystemData = filter => {
  return dispatch => {
    const url =
      baseUrl +
      (filter ? "?filter[]=bodyType," + filter : "?order=isPlanet,asc");

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(setSolarSystemData(data));
      });
  };
};

export const sortSolarSystemData = direction => {
  return dispatch => {
    const url =
      baseUrl + (direction ? "?order=name" + direction : "?order=isPlanet,asc");
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(setSolarSystemData(data));
      });
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
        ...state,
        solarSystemData: action.data
      };
    default:
      return state;
  }
};

export default reducer;
