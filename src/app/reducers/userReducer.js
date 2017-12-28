export function user(state = {users:[{name:'Dmitry',age:27}]},action){
    switch (action.type){
        case 'ADD_USER_FULFILLED':
            state = {
                users:[...state.users,action.payload]
            };
            break;
    }
    return state
}