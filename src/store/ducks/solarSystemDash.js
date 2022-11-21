const SET_ALL_SOLAR_SYSTEM_DATA = "SET_ALL_SOLAR_SYSTEM_DATA";
const SET_QUERIED_SOLAR_SYSTEM_DATA = "SET_QUERIED_SOLAR_SYSTEM_DATA";
const ADD_NEW_BODY = "ADD_NEW_BODY";
const SET_SELECTED_BODY = "SET_SELECTED_BODY";

const initialState = {
  allSolarSystemData: [],
  queriedSolarSystemData: [],
  selectedBody: "Earth"
};

const baseUrl = "https://api.le-systeme-solaire.net/rest/bodies";

const concatCustomBodies = data => {
  if (localStorage.getItem("customBodies")) {
    data.bodies = data.bodies.concat(
      JSON.parse(localStorage.getItem("customBodies"))
    );
  }
  return data;
};

export const getAllSolarSystemData = () => {
  return dispatch => {
    const url = baseUrl + "?order=isPlanet,asc";
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(setAllSolarSystemData(data));
        dispatch(setQueriedSolarSystemData(concatCustomBodies(data)));
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
        dispatch(
          setQueriedSolarSystemData(filter ? data : concatCustomBodies(data))
        );
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
        dispatch(
          setQueriedSolarSystemData(direction ? data : concatCustomBodies(data))
        );
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

export const addNewBody = newBody => {
  return {
    type: ADD_NEW_BODY,
    newBody
  };
};

export const setSelectedBody = body => {
  return {
    type: SET_SELECTED_BODY,
    body
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
      //Need to make a deep copy - otherwise changes to objects are not being recoginsed
      let allSolarSystemDataCopy = JSON.parse(
        JSON.stringify(state.allSolarSystemData)
      );
      allSolarSystemDataCopy.bodies.push(action.newBody);
      let queriedSolarSystemDataCopy = JSON.parse(
        JSON.stringify(state.queriedSolarSystemData)
      );
      queriedSolarSystemDataCopy.bodies.push(action.newBody);
      return {
        ...state,
        allSolarSystemData: allSolarSystemDataCopy,
        queriedSolarSystemData: queriedSolarSystemDataCopy
      };
    case SET_SELECTED_BODY:
      return {
        ...state,
        selectedBody: action.body
      };
    default:
      return state;
  }
};

export default reducer;
