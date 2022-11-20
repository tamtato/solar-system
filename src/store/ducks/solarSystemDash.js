const SET_ALL_SOLAR_SYSTEM_DATA = "SET_ALL_SOLAR_SYSTEM_DATA";
const SET_QUERIED_SOLAR_SYSTEM_DATA = "SET_QUERIED_SOLAR_SYSTEM_DATA";
const ADD_NEW_BODY = "ADD_NEW_BODY";

const initialState = {
  allSolarSystemData: [],
  queriedSolarSystemData: []
};

const baseUrl = "https://api.le-systeme-solaire.net/rest/bodies";

export const getAllSolarSystemData = () => {
  return dispatch => {
    const url = baseUrl + "?order=isPlanet,asc";
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(setAllSolarSystemData(data));
        dispatch(setQueriedSolarSystemData(data));
      });
  };
};

export const filterSolarSystemData = filter => {
  return dispatch => {
    const url =
      baseUrl +
      (filter ? "?filter[]=bodyType,eq," + filter : "?order=isPlanet,asc");
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(setQueriedSolarSystemData(data));
      });
  };
};

export const sortSolarSystemData = direction => {
  return dispatch => {
    const url =
      baseUrl +
      (direction ? "?order=englishName," + direction : "?order=isPlanet,asc");
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(setQueriedSolarSystemData(data));
      });
  };
};

const setAllSolarSystemData = data => {
  return {
    type: SET_ALL_SOLAR_SYSTEM_DATA,
    data
  };
};

const setQueriedSolarSystemData = data => {
  return {
    type: SET_QUERIED_SOLAR_SYSTEM_DATA,
    data
  };
};

export const addNewBody = data => {
  return {
    type: ADD_NEW_BODY,
    data
  };
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ALL_SOLAR_SYSTEM_DATA:
      return {
        ...state,
        allSolarSystemData: action.data
      };
    case SET_QUERIED_SOLAR_SYSTEM_DATA:
      return {
        ...state,
        queriedSolarSystemData: action.data
      };
    case ADD_NEW_BODY:
      return {
        ...state,
        queriedSolarSystemData: action.data
      };
    default:
      return state;
  }
};

export default reducer;
