import Home from "./Home/Home";
import { Outlet } from "react-router";


function App() {
  

    return (
      <div style={{ height: "100vh", backgroundColor: "white" }}>
      <Outlet />
    </div>
    );
  }
  
  export default App;