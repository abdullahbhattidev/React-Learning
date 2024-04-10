interface Action{
    type:"LOGIN" | 'LOGOUT'
}

const loginStatusReducer = (state: string, action:Action): string=> {
    if(action.type==="LOGIN") return state = 'Abdullah Bhatti';
    if(action.type==="LOGOUT") return state= '';
    return ""
}

export default loginStatusReducer