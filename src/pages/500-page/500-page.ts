import { ErrorPage } from "../../components/error-page";
import { renderDOM } from "../../services/renderDOM/renderDOM";
import '../../style.scss';

const errorPage500  = new ErrorPage ('div', {
    statusCode: "500",
    description: "Не туда попали",
    linkHref: "/",
    linkText: "Назад к чатам" 
    });

renderDOM('#app', errorPage500);
