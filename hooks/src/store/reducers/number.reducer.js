export function numberReducer(state, action) {
    switch (action.type) {
        case 'add2Number':
            return { ...state, number: state.number + 2 }
        case 'vezes7':
            return { ...state, number: state.number * 7 }
        case 'divididoPor25':
            return {...state, number: state.number / 25}
        case 'inteiro':
            return {...state, number: parseInt(state.number)}
        case 'addN':
            return {...state, number: state.number + parseInt(action.n) }
        default:
            return state;
    }
}

// export function reducerExercicio(state, action) {
//     switch (action.type) {
//         case 'vezes7':
//             return { ...state, number: state.number * 7 }
//         case 'divididoPor25':
//             return {...state, number: state.number / 25}
//         case 'inteiro':
//             return {...state, number: parseInt(state.number)}
//         case 'addN':
//             return {...state, number: state.number + parseInt(action.n) }
//         default:
//             return state;
//     }
// }