// Selection Vareable
let list = document.querySelector(".head .container ul .list");
let menuli = document.querySelectorAll(".list li");
let searchButton = document.querySelector(".head .container ul .Search");
let searchDiv = document.querySelector(".searchDiv");
let box = Array.from(document.querySelectorAll(".boxs .container .all"));
let imgBox = document.querySelectorAll(".boxs .container .all img");
let book = document.querySelector(".boxs .container .box");
let img = document.querySelector(".boxs .container .box img");
let xButton = document.querySelector(".boxs .content .close");
let span = document.querySelector(".box .content .contain");
let count = document.querySelector(".box .content .count")
let enc = document.querySelector(".box .content .enc");
let dic = document.querySelector(".box .content .dic");


// Event Click TO Show Seach
searchButton.onclick = function() {
    let container = document.createElement("div");
    container.className = "container";
    let input = document.createElement("input");
    input.className = "searchInput";
    input.type = "text";
    input.placeholder = "Enter Book Name";
    searchDiv.appendChild(container);
    container.appendChild(input);
    let searchB = document.createElement("button");
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-search";
    searchB.appendChild(icon)
    container.appendChild(searchB);
    searchButton.setAttribute("style", "pointer-events: none;");
    searchButton.style.backgroundColor = "blueviolet";
}

// Event Click On Book To Show Menu Download
box.forEach(element => {
    element.onclick = function () {
        book.style.display = "block";
    }
});
imgBox.forEach(element => {
    element.onclick = function () {
        img.src = element.src;
    }
});
xButton.onclick = function () {
    book.style.display = "none";
}

menuli.forEach(li => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", mangerImg);
});

// Remove Class Active From All li
function removeActive() {
    menuli.forEach(li => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

// Book Imge
function mangerImg() {
    box.forEach(div => {
        div.style.display = "none";
    });
    document.querySelectorAll(this.dataset.box).forEach(ele => {
        ele.style.display = "block";
    });
}


number = 0;
// box amound
enc.onclick = function () {
    ++number;
    count.innerHTML = number;
}

dic.onclick = function () {
    if (number > 0) {
        --number;
        count.innerHTML = number;
    }
}
