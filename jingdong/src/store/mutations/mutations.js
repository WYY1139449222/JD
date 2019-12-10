export function changeIslogin(state,option){
    state.islogin = option.username;
    localStorage.setItem('username',option.username) 
}