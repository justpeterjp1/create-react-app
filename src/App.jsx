// Nothing to see here??? Yah i know...
// To see anything just copy anything for App.jsx files in each component folder and render proeprly in index.jsx
// Each component folder is a separate mini project
// Just like the ReactFacts.jsx file is a separate mini project
// Enjoy!!!

import React from 'react'
import "./App.css"
import { useState } from 'react'


export default function App() {

 function signUp(formData) {
    const email = formData.get('email')
    const password = formData.get('password')
    const info = formData.get('info')
    const workStatus = formData.get('employment-status')
    const diet = formData.getAll('diet')
    const favColor = formData.get('favColor')
    console.log(email, password, info, workStatus, favColor)
    // =====Alternatively, To get all formData at once
    const data = Object.fromEntries(formData)
 }   // ====== But checkbox must stil be set manually using getAll to convert into an array
 return (    
     <main>
        <h1>Signup here</h1>
        <form 
        action={signUp} >
             <label htmlFor="email">Email</label>
            <input id='email' type="email" name='email' placeholder='Enter Email' />
            <br />
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' name='password' ></input>
            <br />
            <label htmlFor="description"></label>
            <textarea name="info" id="description"></textarea>
            <fieldset>
                <legend>Employment status</legend>
                <label htmlFor="radio">
                    <input type="radio" name='employment-status' value='Unemployed' />
                    Unemployed
                </label>
                <label htmlFor="radio">
                    <input type="radio" name='employment-status' value='Part-time' />
                   Part-time
                </label>
                <label htmlFor="radio">
                    <input type="radio" name='employment-status' value='full-time' />
                   Full-time
                </label>
            </fieldset>
            <button>Submit</button>
            <fieldset>
                <legend>Dietary restrictions</legend>
                <label htmlFor="checkbox">
                    <input type="checkbox" name='diet' value='Vegan' />
                    Vegetarian
                </label>
                <label htmlFor="checkbox">
                    <input type="checkbox" name='diet' value='Non-Veg' />
                  Non Vegetarian
                </label>
                <label htmlFor="checkbox">
                    <input type="checkbox" name='diet' value='Anything goes' />
                  Anything goes
                </label>
            </fieldset>
            <label htmlFor="favColor">Favorite color?</label>
            <select name="favColor" id="favColor">
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="indigo">Indigo</option>
                <option value="blue">Blue</option>
                <option value="violet">Violet</option>
            </select>
            <button>Submit</button>
        </form>
    </main>
    )
}