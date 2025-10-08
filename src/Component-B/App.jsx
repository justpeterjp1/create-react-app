// Component-B/App.jsx
// To view this project render contents of this file in App.jsx located in src
// PROJECT NAME >>>> TRAVEL JOURNAL
import "./App.css"
import Entry from "./Entry"
import Header from './Header'
import { Fragment } from 'react'
import MountFuji from "../Component-B/assets/mount-fuji.jpg"
import data from "./data"


const App = () => {
 const entries = data.map( (entry) => {
   return <Entry
   key={entry.id}
    {...entry} // spread operator to pass all props
   />
 })

  return (
    <Fragment>
        <Header />
        <Entry 
        img={{
          src: MountFuji,
          alt: "Mount Fuji"
        }}
        location="📍Japan"
        googleMapsUrl="https://www.google.com/maps/about/behind-the-scenes/streetview/treks/mount-fuji/"
        title="Mount Fuji"
        startDate="12 Jan, 2021"
        endDate="24 Jan, 2021"
        description="Mount Fuji is the tallest mountain in Japan, 
        standing at 3,776 meters (12,380 feet). 
        Mount Fuji is the single most popular tourist site in Japan, 
        for both Japanese and foreign tourists."
        />
        {entries}
       
    </Fragment>
  )
}

export default App