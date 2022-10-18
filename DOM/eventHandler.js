var hoverID = document.querySelector("#oath");

function toggleBackg(event) {
    // hoverID.classList.toggle('toggleBack');
    event.target.style.color = "green";
    // setTimeout(function() {
    //     event.target.style.color = "";
    // }, 500);
}
hoverID.addEventListener("mouseover", toggleBackg, false);
hoverID.addEventListener("mouseout", function(event) {
    event.target.style.color = "";
})

// hoverID.addEventListener("mouseover", function() {
// console.log("hello");
// hoverID.style.backgroundColor = "green";
// })


var clickMe = document.querySelector("#click1");
clickMe.addEventListener("click", function() {
    console.log("bye");
    hoverID.style.backgroundColor = "blue";
})