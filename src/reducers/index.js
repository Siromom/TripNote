import { CHANGE_NAME, CHANGE_DEPART, CHANGE_ARRIVE } from '../actions';
import { TOTAL, TOTAL_MINUS, USED_TOTAL } from '../actions';
import { combineReducers } from 'redux';

const planInitialState = {
    place: '',
    depart: '',
    arrive: ''
};

const bugetInitialState = {
    totalBuget: 0,
    usedBuget: 0
};

const plus = (a, b) => {
    return a+b;
};

const minus = (a, b) => {
    return a-b;
};

function plans(state = planInitialState, action) {
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

function bugets(state = bugetInitialState, action) {
    switch(action.type) {
        case TOTAL:
            return Object.assign({}, state, {
                totalBuget: plus(state.totalBuget, action.totalBuget)
            });
        case TOTAL_MINUS:
            return Object.assign({}, state, {
                totalBuget: minus(state.totalBuget, action.totalBuget)
            });
        case USED_TOTAL:
            return Object.assign({}, state, {
                usedBuget: plus(state.usedBuget, action.usedBuget)
            });    
        default:
            return state;
    }
}

const tripApp = combineReducers({
    plans,
    bugets
});

export default tripApp;