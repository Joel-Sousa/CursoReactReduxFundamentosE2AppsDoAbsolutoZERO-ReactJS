

import {numberReducer} from './number.reducer';
import {userReducer} from './user.reducer';


export function reducer(state, action){
    let newState = numberReducer(state, action);

    return userReducer(newState, action);
}

