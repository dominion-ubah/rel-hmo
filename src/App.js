import './App.css';
import RouteComponent from './routes/RouteComponent/RouteComponent';
import { withRouter } from "react-router-dom";
function App() {
  return (
      <div className="App">
        <RouteComponent  />
      </div>
  );
}

export default withRouter(App);
