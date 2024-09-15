const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const menu = document.querySelector(".menu");
const navBtnContainer = document.querySelector(".nav-btn-container")

let links = [
    {
        keyword: "Paragraph",
        link: "/HTML/paragraph.html"
    },
    {
        keyword: "My Hobby Paragraph",
        link: "/HTML/Paragraph/my-hobby.html"
    },
    {
        keyword: "My Classroom Paragraph",
        link: "/HTML/Paragraph/my-class-room.html"
    },
    {
        keyword: "My Class Teacher",
        link: "/HTML/Paragraph/my-class-teacher.html"
    }
]

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;

    if (input.length) {
        result = links.filter((element) => {
            return element.keyword.toLowerCase().includes(input.toLowerCase());
        });
    }

    display(result);

    if (!result.length) {
        resultBox.innerHTML = '';
    }
}

function display(res) {
    const content = res.map((list) => {
        return `<li><a href="${list.link}"> ${list.keyword} </a></li>`
    });


    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

// let availbleKeywords = ["Paragraph", "My Hobby Paragraph", "My Classroom Paragraph"];

// inputBox.onkeyup = function () {
//     let result = [];
//     let input = inputBox.value;
//     if(input.length) {
//         result = availbleKeywords.filter((keyword) => {
//             return keyword.toLowerCase().includes(input.toLowerCase())
//         });
//         console.log(result);
//     }

//     display(result);

//     if(!result.length) {
//         resultBox.innerHTML = '';
//     }
// }

// function display(result) {
//     const content = result.map((list) => {
//         return "<li onclick=selectInput(this)>" + list + "</li>";
//     });

//     resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
// }

// function selectInput(list) {
//     inputBox.value = list.innerHTML;
//     resultBox.innerHTML = '';   
// }

// menu.addEventListener('click', () => {
// //         // navBtnContainer.style.display = "block";

// //         navBtnContainer.toggleAttribute("nav-btn-container");

// //         // menu.addEventListener('click', ()=> {
// //         //     navBtnContainer.style.transform = "none";
// //         // })
// // })
