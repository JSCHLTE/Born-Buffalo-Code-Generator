const cuisinesArea = document.querySelector("#cuisinesArea");
const btn = document.getElementById("btn");
const append = document.getElementById("append");
const clear = document.getElementById("clear");

btn.addEventListener("click", run);
clear.addEventListener("click", deleteAll);

let arr = [];

function run() {
    let stringArray = cuisinesArea.value.split('\n');
    stringArray.forEach(element => {
        if(element.length == 0){
            return;
        }
        const iPos = stringArray.indexOf(element);
        const result = `i:${iPos};s:${element.trim().length}:"${element.trim()}";`;
        final(result);
    });
}

function final(result) {
    arr.push(result);
    let arrJoin = arr.join("");
    append.innerText = `${(`a:${arr.length}:{${arrJoin}}`)}`;  
}

function deleteAll() {
    arr = [];
    append.innerText = ``;
    cuisinesArea.value = ``;
}

//a:1:{i:0;s:14:"Middle Eastern";}