import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./infoBox.css";

export default function infoBox({ info }) {
  const Hot_img =
    "https://www.treehugger.com/thmb/emVFfdc5Dwzu-u531n2zOSyvkLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg";
  const Cold_img =
    "https://hips.hearstapps.com/hmg-prod/images/trees-on-snow-covered-landscape-in-heavy-snow-day-royalty-free-image-1634585533.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*";
  const rainy_img =
    "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?w=2000";
  return (
    <div className="infoBox">
      <h2>WeatherInfo</h2>
      <div className="cardcontainer">
        <Card sx={{ maxWidth: 445, height: 450 }}>
          <CardMedia
            sx={{ height: 150, width: 300 }}
            image={
              info.humidity > 65
                ? rainy_img
                : info.temp > 15
                ? Hot_img
                : Cold_img
            }
          />
          <CardContent className="cardcontent">
            <Typography gutterBottom variant="h5" component="div">
              <h3>
                {info.name}

                {info.humidity < 65 ? (
                  info.temp > 15 ? (
                    <WbSunnyIcon />
                  ) : (
                    <SevereColdIcon />
                  )
                ) : (
                  <ThunderstormIcon />
                )}
              </h3>
            </Typography>
            <p>Humitidy:{info.humidity}</p>

            <p>Temp:{info.temp}&deg;C</p>
            <p>Weather:{info.condition}</p>
            <p>Windspeed:{info.windspeed}km/h</p>
            <p>Pressure:{info.pressure}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
