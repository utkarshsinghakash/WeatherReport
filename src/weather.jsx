import { useState } from "react";

import SearchBox from "./searchbox.jsx";
import InfoBox from "./infoBox.jsx";

export default function weather() {
  let [weatherInfo, setweatherInfo] = useState({
    humidity: 41,
    name: "Delhi",
    temp: 25.05,
    condition: "smoke",
    windspeed: 2.06,
    pressure: 1014,
  });

  let updateInfo = (newInfo) => {
    setweatherInfo(newInfo);
  };

  return (
    <div>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
