
const dragElements = document.querySelectorAll(".drag-elements");
const dropElements = document.querySelectorAll(".drop-elements");
for (var i = 0; i < dragElements.length; i++) {
    dragElements[i].addEventListener("dragstart", dragStart);
}

for (var i = 0; i < dropElements.length; i++) {
    dropElements[i].addEventListener("dragover", dragOver);
    dropElements[i].addEventListener("drop", drop);
}

// dragStart function

function dragStart(event) {
    // console.log("This is a drag event");
    event.dataTransfer.setData("text", event.target.id); //takes the id
}

function dragOver(event) {
    // console.log("This is a dragOver event");
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var srcID = event.dataTransfer.getData("text");
    var trgtID = event.target.getAttribute("data-id");
    if (srcID === trgtID) {
        document.getElementById("span-" + trgtID).innerText = srcID.toUpperCase();
        console.log("running");
    }

    //console.log("Drop event..");
}