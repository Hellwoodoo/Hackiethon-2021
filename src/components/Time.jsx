import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useTimer } from 'react-timer-hook'
import './Time.css'

function MyTimer({ expiryTimestamp }) {
    let history = useHistory()
    const {
      seconds,
      minutes,
      hours,
      days,
    } = useTimer({ expiryTimestamp, onExpire: () => history.push('/Question')});
  
  
    return (
      
      <div style={{textAlign: 'center'}}>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
        </style>
        <h1 className="mem5-name">Mem5 Timer </h1>
        <div style={{fontSize: '100px'}} className="time-timer">
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <div className="mem-box"></div>
        

      </div>
    );
}


export function Time(props) {
    const name = localStorage.getItem('name');
    const worktime = localStorage.getItem('worktime');
    const breaktime = localStorage.getItem('breaktime');
    const timer = Number.parseInt(worktime, 10) * 60;

    const time = new Date();
    time.setSeconds(time.getSeconds() + timer); 
    return (
        <div className="time-background">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
          </style>
            <h1 className="time-name">Work hard {name}! You got this!</h1>
            <h1 className="time-worktime">This is your worktime: {worktime}</h1>
            <h1 className="time-breaktime">This is your breaktime: {breaktime}</h1>
            <div>
                <MyTimer expiryTimestamp={time} />
            </div>
        </div>
    )
}