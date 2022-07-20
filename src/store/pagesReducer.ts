export interface PageState {
    page: string,
}

const intitalState = {
    page: 'Home'
}

type Action = {type: 'CHANGE_PAGE', payload: string}

export const pagesReducer = (state:PageState = intitalState, action: Action) => {
    switch(action.type){
        case "CHANGE_PAGE": {
            return {...state, page: action.payload}
        }
        default: 
        return state;
    }
}