export function addUser(user){
    return {
        type: 'ADD_USER',
        payload: new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(user)
            },2000)
        })
    }
}