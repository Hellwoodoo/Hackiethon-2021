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
          <h1 className="ent-name">Time for a break</h1>
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
        axios.get('https://secret-ocean-49799.herokuapp.com/https://api.duckduckgo.com/?q=' + company + '&format=json')
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
                    <p className="ent-reward-p">Reward yourself!</p>
                </div>
                <div>
                    <MyTimer expiryTimestamp={time} />
                </div>
                <div>
                    <div className="ent-1">
                        <p>{movie}</p>
                        <p>{movieData?.data?.AbstractText}</p>
                        {/* <img src={movieData?.data?.Image}></img> */}
                        <ReactAPI.MovieAPI />
                    </div>
                    <div className="ent-1">
                        <p>{sport}</p>
                        <p>{sportData?.data?.AbstractText}</p>
                        {/* <img src={sportData?.data?.Image}/> */}
                    </div>
                    <div className="ent-1">
                        <p>{place}</p>
                        <p>{placeData?.data?.AbstractText}</p>
                        {/* <img src={placeData?.data?.Image}></img> */}
                    </div>
                    <div className="ent-1">
                        <p>{company}</p>
                        <p>{companyData?.data?.AbstractText}</p>
                        {/* <img src={companyData?.data?.Image}></img> */}
                        <ReactAPI.AnimalAPI />
                    </div>
                    <div className="ent-1">
                        <p>{game}</p>
                        <p>{gameData?.data?.AbstractText}</p>
                        {/* <img src={gameData?.data?.Image}/> */}
                    </div>
                    <div className="ent-1">
                        <p>{other}</p>
                        <p>{otherData?.data?.AbstractText}</p>
                        {/* <img src={otherData?.data?.Image}></img> */}
                        <ReactAPI.OtherAPI/>
                    </div>
                </div>
            </div>
        </div>
    )
}

