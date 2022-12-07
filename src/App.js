import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskList from "./components/TaskList";
// import Colors from "./components/Colors";
// import {URL} from "../.env";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="app" id='light'>
      <div className="task-container">        
        <TaskList />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;