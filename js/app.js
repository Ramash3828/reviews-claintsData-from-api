
// Get Element
const image = document.getElementById('person-img');
const author = document.getElementsByClassName('person')[0];
const desig = document.getElementsByClassName('designation')[0];
const disc = document.getElementsByClassName('text')[0];
const prevBtn = document.getElementsByClassName('fa-angle-left')[0];
const nextBtn = document.getElementsByClassName('fa-angle-right')[0];

// Initialize index
let currentIndex = 0;

//DOM loaded
window.addEventListener('DOMContentLoaded', function() {

    // Get API's Data
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => getItem(data.results))

});

//Display the Element
function getItem(data) {     
  
    let item = data[currentIndex];

    //Insert data 
    image.src = item.picture.large;
    author.innerText = `${item.name.first} ${item.name.last}`;
    desig.innerText = item.email;
    disc.innerText = `Gender: ${item.gender} Age: ${item.dob.age}`;

    //Prev Button
    prevBtn.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = data.length - 1;
        }    

        getItem(data)
    });
    //Next Button
    nextBtn.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex > data.length - 1) {
            currentIndex = 0;
        }
      
        getItem(data)
    });

}