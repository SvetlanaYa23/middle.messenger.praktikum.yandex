import { AuthorizationLayout } from '../../block/authorization-layout';
import { Button } from '../../components/button';
import { Content } from '../../components/content';
import { FormField } from '../../components/form-field';
import { Link } from '../../components/link';
import { renderDOM } from '../../services/renderDOM/renderDOM';
import '../../style.scss';
import './authorization.scss';

const authorizationLayout = new AuthorizationLayout('div', {
    fields: [
        new FormField('div', { name:"login", value:"Логин", id:"authorization-login", type:"text", placeholder:"ivanivanov"}),
        new FormField('div', { name:"password", value:"Пароль", id:"authorization-password", type:"password", placeholder:"**********" }),
    ],
    button: new Button('div', { value: "Авторизоваться" }),
    link: 
        new Link('a', { linkHref: "/", linkText: "Нет аккаунта?" }),
});

const content = new Content('main', {
    content: authorizationLayout,
});

renderDOM('#app', content);
