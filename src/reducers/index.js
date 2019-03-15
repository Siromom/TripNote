import { CHANGE, SUBMIT } from '../actions';
import { combineReducers } from 'redux';

const planIntialState = {
    name: '',
    depart: '',
    arrive: ''
};

function plans(state = planIntialState, action) {
    switch(action.type) {
        case CHANGE:
            if(e.target.name == 'name') {
                return Object.assign({}, state, {
                    name: e.target.value
                });
            }
        case SUBMIT:
            return state;
        default:
            return state;
    }
}

const tripApp = combineReducers({
    plans
});

export default tripApp;