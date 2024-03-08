import { ChatLayout } from '../../block/chat-layot';
import { ChatTab } from '../../components/chat-tab';
import { Content } from '../../components/content';
import { renderDOM } from '../../services/renderDOM/renderDOM';
import '../../style.scss';
import './chat.scss';

const chatLayout = new ChatLayout('div', {
    chatTabs: [
        new ChatTab('div', { userName:"Антон", messenge:"Привет!", time:"10:20"}),
        new ChatTab('div', { userName:"Антон", messenge:"Привет!", time:"10:27"}),
        new ChatTab('div', { userName:"Антон", messenge:"Привет!", time:"10:29"}),
    ]
});

const content = new Content('main', {
    content: chatLayout,
});

renderDOM('#app', content);
