export default function loginAction(username,password){
    let loggedInData={
        username:username,
        password:password
    }
    return{
        type:"loginreducer",
        payload:loggedInData
    }
}