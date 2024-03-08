import { PasswordEditLayout } from '../../block/password-edit-layout';
import { Avatar } from '../../components/avatar';
import { Button } from '../../components/button';
import { Content } from '../../components/content';
import { FieldEdit } from '../../components/field-edit';
import { renderDOM } from '../../services/renderDOM/renderDOM';
import '../../style.scss';
import './password-edit.scss';

const passwordEditLayout = new PasswordEditLayout('div', {
    avatar: new Avatar('div', { name: "avatar" }),
    fields: [,
        new FieldEdit('div', { type:"password", name:"oldPassword", id:"old-password", value :"Старый пароль", inputValue:"***********" }),
        new FieldEdit('div', { type:"password", name:"newPassword", id:"new-password", value :"Новый пароль", inputValue:"***********" }),
        new FieldEdit('div', { type:"password", name:"newPassword", id:"new-password-again", value :"Повторите новый пароль", inputValue:"***********" }),
    ],
    button: new Button('div', { value: "Сохранить"}),
});

const content = new Content('main', {
    content: passwordEditLayout ,
});

renderDOM('#app', content);
