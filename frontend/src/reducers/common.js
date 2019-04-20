import objectAssign from 'object-assign';

export default function commonReducer(state={isLoading: false, snackbarStatus: ""}, action){
    let newState = null;
    switch(action.type){
        case 'SET_LOADING':
            newState = objectAssign({},state);
            newState.isLoading = action.loading;
            return newState;
        case 'SHOW_SNACKBAR':
            newState = objectAssign({},state);
            newState.snackbarStatus = action.snackbarStatus;
            return newState;
    }
    return state;
}
