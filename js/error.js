(() => {
    "use strict";
    const form = document.getElementById("form");
    const input = form.querySelector(".error__input");
    const button = document.querySelector(".error__button");
    let isChanged = false;
    input.addEventListener("input", (event => {
        if (!isChanged) {
            button.textContent = "Подписаться на обновления";
            isChanged = true;
        }
    }));
    form.addEventListener("submit", formSend);
    function formSend(event) {
        event.preventDefault();
        const isError = formValidate(form);
        if (isError) alert("Введите корректный почтовый ящик!"); else {
            const formData = new FormData(form);
            const button = document.querySelector(".error__button");
            button.textContent = "Вы подписаны";
            isChanged = false;
            for (const item of formData.values()) console.log(item);
        }
    }
    function formValidate(form) {
        const input = form.querySelector(".error__input");
        formRemoveError(input);
        if (!testEmail(input.value) || input.value === "") {
            formAddError(input);
            return true;
        }
        return false;
    }
    function formAddError(element) {
        element.classList.add("--err");
        element.parentElement.classList.add("--err");
    }
    function formRemoveError(element) {
        element.classList.remove("--err");
        element.parentElement.classList.remove("--err");
    }
    function testEmail(email) {
        const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])");
        return regex.test(email);
    }
})();