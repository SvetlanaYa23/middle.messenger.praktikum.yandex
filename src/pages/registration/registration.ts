import { RegistrationLayout } from '../../block/registration-layout';
import { Button } from '../../components/button';
import { Content } from '../../components/content';
import { FormField } from '../../components/form-field';
import { Link } from '../../components/link';
import { renderDOM } from '../../services/renderDOM/renderDOM';
import '../../style.scss';
import './registration.scss';

const registrationLayout = new RegistrationLayout('div', {
    fields: [
        new FormField('div', { 
            type:"email", 
            name:"email", 
            id:"registration-email", 
            value:"Почта", 
            placeholder:"pochta@yandex.ru"
        }),
        new FormField('div', { 
            type:"text", 
            name:"login", 
            id:"registration-login", 
            value:"Логин", 
            placeholder:"ivanivanov" 
        }),
        new FormField('div', { 
            type:"text", 
            name:"first_name", 
            id:"registration-first-name", 
            value:"Имя", 
            placeholder:"Иван"
        }),
        new FormField('div', { 
            type:"text", 
            name:"second_name", 
            id:"registration-second-name", 
            value:"Фамилия", 
            placeholder:"Иванов" 
        }),
        new FormField('div', { 
            type:"tel", 
            name:"phone", 
            id:"registration-phone", 
            value:"Телефон", 
            placeholder:"+ 7 (999) 999 99 99"
        }),
        new FormField('div', { 
            type:"password",  
            name:"password",
            id:"registration-password", 
            value:"Пароль", 
            placeholder:"**********" 
        }),
        new FormField('div', { 
            type:"password", 
            name:"password", 
            id:"registration-password-again", 
            value:"Пароль (ещё раз)", 
            placeholder:"**********" 
        }),
    ],
    button: new Button('div', { value: "Зарегистрироваться" }),
    link: 
        new Link('a', { linkHref: "/", linkText: "Войти" }),
});

const content = new Content('main', {
    content: registrationLayout,
});

renderDOM('#app', content);
