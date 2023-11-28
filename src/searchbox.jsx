import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchbox.css";
import { useState } from "react";

export default function searchbox({ updateInfo }) {
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "96ae9f7cfdfd0e141c2d5c9e11d8d9c4";
  let [city, setcity] = useState("");
  let [error, seterror] = useState(false);

  let getweather = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      let result = {
        name: jsonresponse.name,
        temp: jsonresponse.main.temp,
        humidity: jsonresponse.main.humidity,
        Condition: jsonresponse.weather[0].description,
        windspeed: jsonresponse.wind.speed,
        pressure: jsonresponse.main.pressure,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  function handlechange(e) {
    let newvalue = e.target.value;
    setcity(newvalue);
  }
  let handlesubmit = async (e) => {
    try {
      e.preventDefault();

      setcity("");
      let newInfo = await getweather();
      updateInfo(newInfo);
    } catch (err) {
      seterror(true);
    }
  };

  return (
    <div className="searchbox">
      <h3>Search the City</h3>
      <form onSubmit={handlesubmit}>
        <TextField
          id="City"
          label="City name"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
        />
        <br></br>
        <br></br>
        <Button className="btn" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exist in API!</p>}
      </form>
    </div>
  );
}
