import { LogForm } from "./loginWindow.js";
// document.querySelector('.div-logInOut');

let login;
let form;
const logoIco = document.querySelector('.div-logInOut');
logoIco.addEventListener('click', (e) => {

    form = new LogForm();

    if (e.target == '[object HTMLParagraphElement]') {
        form.makeForm();
        // login = form.value;
        // console.log(login);

        document.querySelector('.div-h1').addEventListener('click', () => {
            // alert('aaa');
            // alert(form.login);
            
        })

    }

})


