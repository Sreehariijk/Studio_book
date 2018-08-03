export default (state={
    username:"",
    password:""
},action)=>{
    switch(action.type){
        case "loginreducer":
        return {
            ...state,
            username:action.payload.username,
            password:action.payload.password
        }

        default:
        return state
    }
}