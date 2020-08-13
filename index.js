// Get Modal Element 
var modal = document.getElementById('simpleModal');
// Get opan modal btton
var modalBtn = document.getElementById('btn');
// Get close modal button
var closeBtn = document.getElementById('closeBtn');

// listen for opan click 
modalBtn.addEventListener('click', openModal);

// listen for close click
closeBtn.addEventListener('click', closeModal);


// function to opan Modal
 function openModal(){
     modal.style.display = "block";
 }
// function to close modal
function closeModal(){
    modal.style.display = "none";
}