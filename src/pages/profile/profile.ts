import { ProfileLayout } from '../../block/profile-layout';
import { Avatar } from '../../components/avatar';
import { Content } from '../../components/content';
import { Link } from '../../components/link';
import { ProfileField } from '../../components/profile-field';
import { renderDOM } from '../../services/renderDOM/renderDOM';
import '../../style.scss';
import './profile.scss';

const profileLayout = new ProfileLayout('div', {
    avatar: new Avatar('div', { name: "avatar" }),
    fields: [
        new ProfileField('div', { fieldName: "Почта", fieldValue: "pochta@yandex.ru" }),
        new ProfileField('div', { fieldName: "Логин", fieldValue: "ivanivanov" }),
        new ProfileField('div', { fieldName: "Имя", fieldValue: "Иван" }),
        new ProfileField('div', { fieldName: "Фамилия", fieldValue: "Иванов" }),
        new ProfileField('div', { fieldName: "Имя в чате", fieldValue: "Иван" }),
        new ProfileField('div', { fieldName: "Телефон", fieldValue: "+7 (909) 967 30 30" }),
    ],
    links: [
        new Link('a', { linkHref: "/pages/profile-edit/profile-edit.html", linkText: "Изменить данные" }),
        new Link('a', { linkHref: "/pages/password-edit/password-edit.html", linkText: "Изменить пароль" }),
        new Link('a', { linkHref: "/", linkText: "Выход" }),
    ],
});

const content = new Content('main', {
    content: profileLayout,
});

renderDOM('#app', content);
