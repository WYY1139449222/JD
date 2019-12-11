export function changeIslogin(state,option){
    // console.log();
    state.islogin = option.username;
<<<<<<< HEAD
    localStorage.setItem('username',option.username) 
}
export function changeSingOut(state){
    state.islogin=false;
    localStorage.removeItem('username');

=======
    localStorage.setItem('username',option.username); 
    state.arrayCar = option.car;
    localStorage.setItem('arrayCar',JSON.stringify(option.car));
>>>>>>> 4f620e56556b534666490c5b73da727767ec1b2b
}