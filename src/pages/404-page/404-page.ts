import { ErrorPage } from "../../components/error-page";
import { renderDOM } from "../../services/renderDOM/renderDOM";
import '../../style.scss';

const errorPage404  = new ErrorPage ('div', {
    statusCode: "404",
    description: "Не туда попали",
    linkHref: "/",
    linkText: "Назад к чатам" 
    });

renderDOM('#app', errorPage404);
