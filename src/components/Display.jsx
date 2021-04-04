import React,{ useEffect, useState, Component} from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import axios from 'axios';
import ReactAPI from './ReactAPI';
import './Display.css'

function MyTimer({ expiryTimestamp }) {
    let history = useHistory()
    const {
      seconds,
      minutes,
      hours,
      days,
    } = useTimer({ expiryTimestamp, onExpire: () => history.push('/')});
  
  
    return (
        <div style={{textAlign: 'center'}}>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
          </style>
          <h1 className="ent-name">Well done on working hard!</h1>
          <div style={{fontSize: '100px'}} className="ent-timer">
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          </div>
          <div className="ent-box"></div>
  
        </div>
      );
  }


export function Display(props) {
    const movie = localStorage.getItem('movie');
    const sport = localStorage.getItem('sport');
    const place = localStorage.getItem('place');
    const company = localStorage.getItem('company');
    const game = localStorage.getItem('game');
    const other = localStorage.getItem('other');

    const breaktime = localStorage.getItem('breaktime');
    const timer = Number.parseInt(breaktime, 10) * 60;
    const time = new Date();
    time.setSeconds(time.getSeconds() + timer); 
    
    const [movieData, setmovieData] = useState({});
    const [sportData, setsportData] = useState({});
    const [placeData, setplaceData] = useState({});
    const [companyData, setcompanyData] = useState({});
    const [gameData, setgameData] = useState({});
    const [otherData, setotherData] = useState({});

    useEffect(() => {
        axios.get('https://secret-ocean-49799.herokuapp.com/https://api.duckduckgo.com/?q=' + movie + 'movie' + '&format=json')
        .then(data => setmovieData(data))
    },[])
    useEffect(() => {
        axios.get('https://secret-ocean-49799.herokuapp.com/https://api.duckduckgo.com/?q=' + sport + '&format=json')
        .then(data => setsportData(data))
    },[])
    useEffect(() => {
        axios.get('https://secret-ocean-49799.herokuapp.com/https://api.duckduckgo.com/?q=' + place + '&format=json')
        .then(data => setplaceData(data))
    },[])
    useEffect(() => {
        axios.get('https://secret-ocean-49799.herokuapp.com/https://api.duckduckgo.com/?q=' + company + 'company' + '&format=json')
        .then(data => setcompanyData(data))
    },[])
    useEffect(() => {
        axios.get('https://secret-ocean-49799.herokuapp.com/https://api.duckduckgo.com/?q=' + game + '&format=json')
        .then(data => setgameData(data))
    },[])
    useEffect(() => {
        axios.get('https://secret-ocean-49799.herokuapp.com/https://api.duckduckgo.com/?q=' + other + '&format=json')
        .then(data => setotherData(data))
    },[])

    return (
        <div className="background">
            <div>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
                </style>
                <div>
                    <h1 className="duckduckgo">From DuckDuckGo</h1>
                    <p className="ent-reward-p">Reward yourself!</p>
                </div>
                <div>
                    <MyTimer expiryTimestamp={time} />
                </div>
                <div>
                    <div className="ent-1">
                        <h1>{movie}</h1>
                        <h1>{movieData?.data?.AbstractText}</h1>
                        <img src={movieData?.data?.Image}></img>
                        <ReactAPI.MovieAPI />
                    </div>
                    <div className="ent-1">
                        <h1>{sport}</h1>
                        <h1>{sportData?.data?.AbstractText}</h1>
                        <img src={sportData?.data?.Image}/>
                    </div>
                    <div className="ent-1">
                        <h1>{place}</h1>
                        <h1>{placeData?.data?.AbstractText}</h1>
                        <img src={placeData?.data?.Image}></img>
                    </div>
                    <div className="ent-1">
                        <h1>{company}</h1>
                            <h1>{companyData?.data?.AbstractText}</h1>
                            <img src={companyData?.data?.Image}></img>
                            <ReactAPI.AnimalAPI />
                    </div>
                    <div className="ent-1">
                        <h1>{game}</h1>
                        <h1>{gameData?.data?.AbstractText}</h1>
                        <img src={gameData?.data?.Image}/>
                    </div>
                    <div className="ent-1">
                        <h1>{other}</h1>
                        <h1>{otherData?.data?.AbstractText}</h1>
                        <img src={otherData?.data?.Image}></img>
                        <ReactAPI.OtherAPI/>
                    </div>
                    <Link to="/" className="ent-link-home">Home</Link>
                </div>
            </div>
        </div>
    )
}

