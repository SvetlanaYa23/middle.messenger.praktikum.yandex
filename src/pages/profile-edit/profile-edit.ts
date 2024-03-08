import { ProfileEditLayout } from '../../block/profile-edit-layout';
import { Avatar } from '../../components/avatar';
import { Button } from '../../components/button';
import { Content } from '../../components/content';
import { FieldEdit } from '../../components/field-edit';
import { renderDOM } from '../../services/renderDOM/renderDOM';
import '../../style.scss';
import './profile-edit.scss';

const profileEditLayout = new ProfileEditLayout('div', {
    avatar: new Avatar('div', { name: "avatar" }),
    fields: [
        new FieldEdit('div', { type:"email", name:"email", id:"profile-email", value: "Почта", inputValue:"pochta@yandex.ru" }),
        new FieldEdit('div', { type:"text", name:"login", value:"Логин", inputValue:"ivanivanov" }),
        new FieldEdit('div', { type:"text", name:"first_name", id:"profile-first-name", value:"Имя", inputValue:"Иван" }),
        new FieldEdit('div', { type:"text", name:"second_name", id:"profile-second-name", value:"Фамилия", inputValue:"Иванов" }),
        new FieldEdit('div', { type:"text", name:"display_name", id:"profile-display-name", value:"Имя в чате", inputValue:"Иван"}),
        new FieldEdit('div', { type:"tel", name:"phone", id:"profile-phone", value:"Телефон", inputValue:"+7 (909) 967 30 30" }),
    ],
    button: new Button('div', { value: "Сохранить"}),
});

const content = new Content('main', {
    content: profileEditLayout,
});

renderDOM('#app', content);
