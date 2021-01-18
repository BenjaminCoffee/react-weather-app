import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: "Sample",
    };
  }

  render() {
    return (
      <div>
        <Router>
          <>
            <Route path="/welcome" component={Welcome} />
            <Route path="/info" component={CityWeather} />
          </>
        </Router>
      </div>
    );
  }
}

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };

    // bind this to our methods
    this.handleChange = this.handleChange.bind(this);
    this.submitClicked = this.submitClicked.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Welcome to the Weather App!</h1>
        <p>Enter the name of a city to see it's weather:</p>
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.submitClicked}>Submit Query</button>
      </div>
    );
  }

  submitClicked() {
    console.log("button clicked");
    console.log(this.state.city);
    passCityToWeatherApp();
    this.props.history.push("/info");
  }

  handleChange(event) {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  }
}

//when we press submit we will take the submission,
// pass it as a state to this component
// pass it as props to the new component
// route the page to that component

class CityWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "Dallas",
      ApiUrl: "https://api.openweathermap.org/data/2.5/weather?q=",
      and: "&appid=",
      myKey: "ae29affb3122874f84f07be64622c7e3",
    };
  }

  callApi() {
    var aString = this.state.ApiUrl;
    aString = aString.concat(this.state.city);
    aString = aString.concat(this.state.and);
    aString = aString.concat(this.state.myKey);

    console.log(aString);

    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", aString);

    
  }

  render() {
    this.callApi();
    return (
      <div>
        <p> {this.state.city}</p>
        displaying weather info
      </div>
    );
  }
}

function passCityToWeatherApp() {
  console.log({ WeatherApp });
}

export default WeatherApp;
