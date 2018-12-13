import {fromJS} from 'immutable';
import {combineReducers} from 'redux';
import {
  HOME_CHANGE_TITLE
} from './actions';

const initialState = fromJS({
  title: 'aaaarrrrr'
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case HOME_CHANGE_TITLE:
      return state.set('title', action.title);
    default:
      return state;
  }
}

// function secReducer(state = fromJS({}), action) {
//   switch(action.type) {
//     case HOME_CHANGE_TITLE:
//       return state.set('ssss', 'fffff');
//     default:
//       return state;
//   }
// }

// export default combineReducers({homeReducer, secReducer});
export default homeReducer;
