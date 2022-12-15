const storage = window.localStorage;
    storage.setItem('policeC', '18');
    storage.setItem('type', 'materiel');
    storage.setItem('theme', 'black');

let result2 = document.getElementById("result");

function textDiv() {
    result2.innerHTML = storage.getItem("theme");

    console.log("theme: " + storage.getItem("theme") + " type: " + storage.getItem("type") +
    " policeC: " + storage.getItem("policeC"));
}
textDiv();




