function dropbox_event(){
    const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

// select your option 누르면 클래스 명이 바뀜 

    selectBtn.addEventListener('click',()=>optionMenu.classList.toggle("active"));

    options.forEach(option => {
        option.addEventListener("click",() =>{
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            console.log(selectedOption);
            optionMenu.classList.remove("active");
        })
    })
}