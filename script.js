let txt1 = ``;
let txt2 = ``;

function toggle() {
    let box = document.getElementById(`box`);
    box.classList.toggle(`bug`);
    txt1Change()
}

function addRemove() {
    let box = document.getElementById(`box2`);
    if(box.classList.contains(`bug`)){
        box.classList.remove(`bug`);
    } else {
        box.classList.add(`bug`)
    }
    txt2Change()
}

// Everything below this is really inefficient, but I did it just for fun so I dont care

function txt1Change() {
    if(document.getElementById(`box`).className == `bug`){
        txt1 =`Bug`;
    } else if(document.getElementById(`box`).className !== `bug`){
        txt1 = `Ham`
    }
    txtUpdate()
}

function txt2Change() {
    if(document.getElementById(`box2`).className == `bug`){
        txt2 =`Bugger`;
    } else if(document.getElementById(`box2`).className !== `bug`){
        txt2 = `Burger`
    }
    txtUpdate()
}

function txtUpdate() {
    document.getElementById(`h1`).innerText = `This is a `+txt1+txt2;
}