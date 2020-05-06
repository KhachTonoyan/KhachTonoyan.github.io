import React, {useEffect, useState} from 'react';
import Search from "./Search/Search"
import {apiFetch,id,locFetch} from "./Helper/fetch";
import Days from "./Days/Days";
import Loading from "./Loading";
import Details from "./Details";
import Map from "./Map"
import { Container } from "@material-ui/core";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';

function App() {
const [inpVal,setInp] = useState("");
const [days,setDays] = useState({});
const [loading,setLoading] = useState(false);
const [loc,setLoc] = useState({})

    useEffect(() => {
        let lat,lon;
         navigator.geolocation.getCurrentPosition( a => {
            setLoc({lat:a.coords.latitude,lon:a.coords.longitude})
            lat = a.coords.latitude;
            lon = a.coords.longitude;
             fetch(locFetch + `&accept-language=en&lat=${lat}&lon=${lon}&format=json`)
                 .then(res => res.json())
                 .then(data => {
                     setLoading(true);
                     fetch(apiFetch + data.address.city + "&appid=" + id)
                         .then(res => res.json())
                         .then(data =>{
                             setDays(data);
                             setLoading(false)
                         }).catch(err => {
                         console.log(err)
                     })
                 })
        });

    },[],);


  function changeInp(value) {
    setInp(value)
  };

  function submitInp() {
      setLoading(true);
    fetch(apiFetch + inpVal + "&appid=" + id)
        .then(res => res.json())
        .then(data =>{
            setDays(data);
            setInp("");
            setLoading(false);
        }).catch(err => {
          console.log(err)
    })
  }

  return (
      <Router>
      <Container style={{display:"flex",justifyContent:'center',flexDirection: "column",alignItems:"center"}}>
          <Search getInputValue={inpVal} change={changeInp} submit={submitInp}/>
          <Switch>
              <Route path="/" exact>
                  {loading ? <Loading/> : <Days days={days}/>}
              </Route>
              <Route path='/:day' render={(props) => <Details days={days} info={props}/>}>
              </Route>
          </Switch>
      </Container>
          <Container style={{width:"400px",height:"400px",position:"absolute",right:0,bottom:0,padding:0}}>
          <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" // you need google map API key -- &key=APIKEY --
              loadingElement={<div style={{ height: `100%` }}/>}
              containerElement={<div style={{ height: `100%`}}/>}
              mapElement={<div style={{ height: `100%` }}/>}
              loc={loc}
          />
          </Container>
      </Router>
  );
}

export default App;
