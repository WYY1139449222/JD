export function changeIslogin(state,option){
    // console.log();
    state.islogin = option.username;
    localStorage.setItem('username',option.username); 
    state.arrayCar = option.car;
    localStorage.setItem('arrayCar',JSON.stringify(option.car));
}