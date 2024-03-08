import Component from "../../services/component/component";
import tpl from "./chat-tab";
import './chat-tab.scss';

export class ChatTab extends Component {
    render() {
        return this.compile(tpl);
      }
}
