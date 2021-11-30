import "./app.css";
import {Buffer} from 'buffer';
import axios from "axios";

const App = () => {

  // post req yvuulah url http uchir CORSiin aldaa garaad bga tur zuur test hiihiin tuld heroku ashiglaad hiichihsen bga

  const url = "https://cors-anywhere.herokuapp.com/http://45.77.39.206:8081/api/v4/mqtt/publish";
  const username = 'admin';
  const password = 'public';
  
  //  haalga ongoilgoh json 

  const Opdata = {
    topic: "home/living",
    payload: { id: "E8:DB:84:AD:B2:34", command: "on" },
    qos: 0,
    retain: false,
    //garagenii haalganii id odoogiin baidlaar static ugchihsun bga databaseesee avah ystoi
    clientid: "869523050100420",
  };
  
  //  haalga haah json 

  const Cldata = {
    topic: "home/living",
    payload: { id: "E8:DB:84:AD:B2:34", command: "off" },
    qos: 0,
    retain: false,
    //garagenii haalganii id odoogiin baidlaar static ugchihsun bga databaseesee avah ystoi
    clientid: "869523050100420",
  };

  // tsaadah serverluu axiosoor yvuulj bui reqiin function 

  const doorOpen = () => {
    axios
      .post(url, Opdata, {
        auth: {
          username: username,
          password: password,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const closeDoor = () => {
    axios
      .post(url, Cldata, {
        auth: {
          username: username,
          password: password,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <button className="on" onClick={doorOpen}>
        ON
      </button>
      <button className="off" onClick={closeDoor}>
        OFF
      </button>
    </div>
  );
};

export default App;
