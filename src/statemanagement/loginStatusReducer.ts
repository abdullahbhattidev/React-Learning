export interface AuthAction{
    type:"LOGIN" | 'LOGOUT'
}

const loginStatusReducer = (state: string, action:AuthAction): string=> {
    if(action.type==="LOGIN") return state = 'Abdullah Bhatti';
    if(action.type==="LOGOUT") return state= '';
    return ""
}

export default loginStatusReducer