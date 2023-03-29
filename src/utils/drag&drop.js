export function allowDrop(ev) {
    ev.preventDefault();
}

/*function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}*/

export function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    console.log(data)
    ev.target.appendChild(document.getElementById(data));
}