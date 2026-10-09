var popup = document.querySelector(".pop");
var addbook = document.querySelector(".add-book");

var plusBtn = document.getElementById("btn1");

plusBtn.addEventListener("click",function(){

    popup.style.display = "block";
    addbook.style.display = "block";

});

var cancelBtn = document.getElementById("cancel");

cancelBtn.addEventListener("click",function(event){

    event.preventDefault();

    popup.style.display = "none";
    addbook.style.display = "none";

});



var addBtn = document.getElementById("add");

var title = document.getElementById("book-title");
var text = document.getElementById("book-text");

var container = document.querySelector(".main-box");

addBtn.addEventListener("click",function(event){

    event.preventDefault();

    var div = document.createElement("div");

    div.setAttribute("class","sub-box");

    div.innerHTML = `
        <h2>Name : ${title.value}</h2>

        <h3>Rating</h3>

        <div class="review-icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>

        <h3>Review</h3>

        <p>${text.value}</p>

        <button onclick="deleteReview(event)">
            Delete
        </button>
    `;

    container.append(div);

    title.value = "";
    text.value = "";

    popup.style.display = "none";
    addbook.style.display = "none";

});

function deleteReview(event){

    event.target.parentElement.remove();

}