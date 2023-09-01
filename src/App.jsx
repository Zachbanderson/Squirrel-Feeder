import { useState } from 'react'
import squirrel from './assets/EasternGraySquirrel_GAm.jpg'
import squirrelCarrot from './assets/Squirrel-with-carrot.jpg'

function App() {
  const [hasCarrot, setHasCarrot] = useState(false)

  return (
    <>
        <div className="container">
            <div className="vert-container">
                <img className="squirrel-image" src={hasCarrot ? squirrelCarrot : squirrel}/>
                <button className="button" onClick={() => setHasCarrot(true)}>Give carrot to squirrel</button>
                <p>{hasCarrot ? 'He loves it! He is very appreciative!' : ''}</p>
            </div>
        </div>
    </>
  )
}

export default App;
