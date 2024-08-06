import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const bibleChapters = 1189;
  let newChapter = 0;

  function getRandomChapter(num){
    return Math.floor(Math.random() * num);
  }

  return (
    <>
      <div>
        <button onClick={() => (newChapter = getRandomChapter(bibleChapters))}>
          Chapter is {newChapter}
        </button>
      </div>
    </>
  )
}

export default App
