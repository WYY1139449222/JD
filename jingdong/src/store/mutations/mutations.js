export function changeIslogin(state,option){
    state.islogin = option.username;
    localStorage.setItem('username',option.username) 
}
export function changeSingOut(state){
    state.islogin=false;
    localStorage.removeItem('username');

}