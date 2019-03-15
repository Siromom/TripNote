import { CHANGE_NAME, CHANGE_DEPART, CHANGE_ARRIVE } from '../actions';
import { combineReducers } from 'redux';

const planIntialState = {
    place: '',
    depart: '',
    arrive: ''
};

function plans(state = planIntialState, action) {
    switch(action.type) {
        case CHANGE_NAME:
            return Object.assign({}, state, {
                place: action.place
            });
        case CHANGE_DEPART:
            return Object.assign({}, state, {
                depart: action.depart
            });
        case CHANGE_ARRIVE:
            return Object.assign({}, state, {
                arrive: action.arrive
            });
        default:
            return state;
        
    }
}


const tripApp = combineReducers({
    plans
});

export default tripApp;