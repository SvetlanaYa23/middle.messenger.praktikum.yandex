import Component  from "../../services/component/component";
import tpl from "./avatar";
import './avatar.scss';

export class Avatar extends Component {
    render() {
        return this.compile(tpl);
      }
}
