let islogin = localStorage.getItem("username");
let arr = JSON.parse(localStorage.getItem('arrayCar'))
let arrayCar = arr ? arr : []
export default {
  islogin,
  arrayCar
};
