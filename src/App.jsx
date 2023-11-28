import Button from "@mui/material/Button";
import Searchbox from "./searchbox.jsx";
import InfoBox from "./infoBox.jsx";
import Weather from "./weather.jsx";
import "./App.css";

function App() {
  return (
    <div className="mainBox">
      <h1 style={{ textAlign: "center" }}>Weather App</h1>
      <Weather />
      {/* <h3>Material UI</h3>
      <Button onClick={handleclick} variant="contained" color="success">
        Click me!
      </Button>
      <Button onClick={handleclick} variant="contained" disabled>
        Click me!
      </Button> */}
    </div>
  );
}

export default App;
