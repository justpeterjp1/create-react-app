// First beginner project in React
// Just render and export in root to view
import { createRoot } from 'react-dom/client'
import "./ReactFacts.css"
import { Fragment } from 'react'


const root = createRoot(document.getElementById("root"))

root.render(
  <Page />
)

function Page() {
  return (
    <Fragment>
      <header className='header'>
        <logo className="logo-container">
           <img src="./react-logo.png" alt='logo' className='nav-logo' />
        <h2>ReactFacts</h2>
        </logo>
       
      </header>
      <main className='main'>
        <h1>Reasons I am excited about learning React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      </main>
      <footer className='footer'>
        <small>© 2025 Peter Ojo. Some Rights reserved</small>
      </footer>
    </Fragment>
  )
}