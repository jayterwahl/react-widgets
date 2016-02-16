var React = require('react');
var ReactDOM = require('react-dom');

var WeatherClock = React.createClass({

  getInitialState: function() {
    return {
      lat: "Latitude loading...",
      long: "Longitude loading...",
      weather: ["Weather loading..."]
     };
  },

  componentDidMount: function() {
    var self = this;
    this.timer = setInterval(this.ping, 1000);

    navigator.geolocation.getCurrentPosition(function(pos){
      var lat = pos.coords.latitude;
      var long = pos.coords.longitude;
      self.setState({
        lat: lat,
        long: long
      });
      self.setCurrentWeather();
    });
  },


  setCurrentWeather: function(){

    var self = this;
    var lat = this.state.lat;
    var long = this.state.long;
    var myurl = "http://api.openweathermap.org/data/2.5/weather?lat=" +
    lat + "&lon=" + long + "&appid=645c5d39c7603f17e23fcaffcea1a3c1";

    $.ajax({
      type: "GET",
      url: myurl,
      success: function(data){
        console.log("yeah!");
        self.setState({weather: [data.main.temp,
                                 data.weather[0].description,
                                 data.name]});
    },
      error: function() {
        console.log("didnt work");
    }
    });
  },

  render: function (){
    console.log(this.state);
    return (
      <div>
        {this.state.lat}<hr />
        {this.state.long}<hr />
        Temperature: {this.state.weather[0]}<hr />
        Description: {this.state.weather[1]}<hr />
        City: {this.state.weather[2]}<hr />
      </div>
    );
  },
});



module.exports = WeatherClock;
