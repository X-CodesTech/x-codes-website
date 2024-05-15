import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";

//styles
import "./styles/global.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(<AppRouter />);
