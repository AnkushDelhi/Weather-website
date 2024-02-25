import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import './infoBox.css'


export default function InfoBox({info}){

  const HOT_URL="https://th.bing.com/th/id/OIP.LkPUapwXbQv3Vbt7w1Ew3AHaHa?rs=1&pid=ImgDetMain";
  const RAIN_URL="https://th.bing.com/th/id/OIP.FtaFAruud9HAGN9VNYq8mwHaEK?rs=1&pid=ImgDetMain";
  const COLD_URL="https://th.bing.com/th/id/OIP.gsutN20al7iLncoiICJVEwHaEo?rs=1&pid=ImgDetMain";

    return (
        <> 
        <div className="box">
        <h2>Weather </h2>
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80 ? < UmbrellaIcon /> : info.temp > 15 ?  <LocalFireDepartmentIcon />: <SevereColdIcon />
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Tempeture: {info.temp}&deg;C</div>
         <div>Humidity: {info.humidity}</div>
         <div>Min Temp: {info.tempMin}&deg;C</div>
         <div>Max Temp: {info.tempMax}&deg;C</div>
         <div>The weathers feels like {info.feelslike}&deg;C</div>
         <div>The weather can be describe as <i>{info.weather}</i></div>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
        </>
    )
}