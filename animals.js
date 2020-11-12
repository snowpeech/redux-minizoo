const name = document.querySelector("#name");
const zoo = document.querySelector("#zoo");

function changeAnimal(){
    const state = store.getState();
    zoo.innerText = state.animal;
    name.innerText = state.name;
}

document.querySelector("#bear").addEventListener("click",()=>{
    store.dispatch({type:"BEAR"}); 
    changeAnimal();
})
document.querySelector("#sheep").addEventListener("click",()=>{
    store.dispatch({type:"SHEEP"});
    changeAnimal();
})
document.querySelector("#cat").addEventListener("click",()=>{
    store.dispatch({type:"CAT"});
    changeAnimal();
})
document.querySelector("#rabbit").addEventListener("click",()=>{
    store.dispatch({type:"RABBIT"});
    changeAnimal();
})
