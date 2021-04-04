import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage, yupToFormErrors, useFormik } from 'formik';
import './Question.css';

export function Question(props) {

    const [movie, setMovie] = useState('')
    const [sport, setSport] = useState('')
    const [place, setPlace] = useState('')
    const [company, setCompany] = useState('')
    const [game, setGame] = useState('')
    const [colour, setColour] = useState('')
    const [other, setOther] = useState('')

    useEffect(() => {
        localStorage.setItem('movie', movie);
        localStorage.setItem('sport', sport);
        localStorage.setItem('place', place);
        localStorage.setItem('company', company);
        localStorage.setItem('game', game);
        localStorage.setItem('colour', colour);
        localStorage.setItem('other', other);
      }, [movie, sport, place, company, game, colour, other]);
     
    const onChange1 = event => setMovie(event.target.value);
    const onChange2 = event => setSport(event.target.value);
    const onChange3 = event => setPlace(event.target.value);
    const onChange4 = event => setCompany(event.target.value);
    const onChange5 = event => setGame(event.target.value);
    const onChange6 = event => setColour(event.target.value);
    const onChange7 = event => setOther(event.target.value);
    return (
        <Formik>
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <div className="q-background">
                        <style>
                        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
                        </style>
                        <div>
                            <h1 className="q-title">Entertainment Questionnaire</h1>
                        </div>
                        <div>
                            <label className="q-label-one">What is your favourite movie?</label>
                            <input className="q-form-one" type="text"  onChange={onChange1} value={movie}/>
                        </div>
                        <div>
                            <label className="q-label-two">What is your favourite sport?</label>    
                            <input className="q-form-two" type="text" onChange={onChange2} value={sport}/>
                        </div>
                        <div>
                            <label className="q-label-three">What is your favourite place?</label>
                            <input className="q-form-three" type="text" onChange={onChange3} value={place}/>
                        </div>
                        <div>
                            <label className="q-label-four">What is your favourite company?</label>
                            <input className="q-form-four" type="text" onChange={onChange4} value={company}/>
                        </div>
                        <div>
                            <label className="q-label-five">What is your favourite game?</label>
                            <input className="q-form-five" type="text" onChange={onChange5} value={game}/>
                        </div>
                        <div>
                            <label className="q-label-six">What is your favourite colour?</label>
                            <input className="q-form-six" type="text" onChange={onChange6} value={colour}/>
                        </div>
                        <div>
                            <label className="q-label-seven">What else are you interesed in?</label>
                            <input className="q-form-seven" type="text" onChange={onChange7} value={other}/>
                        </div>
                        <div>
                            <Link to="/Display" className="link-entertainment">Go to Entertainment</Link>
                        </div>
                        <div>
                            <Link to="/" className="link-restart">Restart</Link>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}