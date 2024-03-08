import Component  from "../../services/component/component";
import tpl from "./link.ts";
import './link.scss';

export class Link extends Component {
    render() {
        return this.compile(tpl);
      }
}
