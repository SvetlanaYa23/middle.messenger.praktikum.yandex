import Component  from "../../services/component/component";
import tpl from "./button";
import './button.scss';

export class Button extends Component {
    render() {
        return this.compile(tpl);
      }
}


