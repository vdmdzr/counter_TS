type ActionType =
    IncValueACType
    | maxValueACType
    | minValueACType
    | resetValueACType
    | setValueACType
    | disabledButtonACType

export type initStateType = typeof initState
const initState = {value: 0, minValue: 0, maxValue: 0, disableButton: true}

export const reducer = (state: initStateType = initState, action: ActionType):initStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, value: state.value + 1}
        case 'MAX-VALUE':
            return {...state, maxValue: action.maxValue}
        case 'MIN-VALUE':
            return {...state, minValue: action.minValue}
        case 'RESET-VALUE':


        case 'SET-VALUE':
            return {...state, value: state.minValue}
        case 'DISABLED-BUTTON':
            return {...state, disableButton: action.disableButton}
        default:
            return state
    }
}

type IncValueACType = ReturnType<typeof incValueAC>
export const incValueAC = () => {
    return {type: 'INC-VALUE'} as const
}

type maxValueACType = ReturnType<typeof maxValueAC>
export const maxValueAC = (maxValue: number) => {
    return {type: 'MAX-VALUE', maxValue} as const
}

type minValueACType = ReturnType<typeof minValueAC>
export const minValueAC = (minValue: number) => {
    return {type: 'MIN-VALUE', minValue} as const
}

type resetValueACType = ReturnType<typeof resetValueAC>
export const resetValueAC = () => {
    return {type: 'RESET-VALUE'} as const
}

type setValueACType = ReturnType<typeof setValueAC>
export const setValueAC = () => {
    return {type: 'SET-VALUE'} as const
}

type disabledButtonACType = ReturnType<typeof disabledButtonAC>
export const disabledButtonAC = (disableButton: boolean) => {
    return {type: 'DISABLED-BUTTON', disableButton} as const
}

