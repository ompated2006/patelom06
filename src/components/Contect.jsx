import { useState } from "react"

function Contact() {

  const [username, setUsername] = useState("Hello")
  // setUsername("Hii")
  const [myColor, setMyColor] = useState("black")

  function handleClick(e){
    e.preventDefault()
    if(username == 'Hello'){
      setUsername('Hii')
    }else{
      setUsername("Hello")
    }
  }

  return (
    <div>
      <h1 style={{color : myColor}}>Welcome</h1>
      <h1>{username}</h1>
      <button className="btn btn-info ms-2" onClick={handleClick}>Click Me</button>
      <button className="btn btn-success ms-2" onClick={() => {setMyColor('green')}}>Click</button>
      <button className="btn btn-danger ms-2" onClick={() => {setMyColor('red')}}>Click</button>
      <button className="btn btn-primary ms-2" onClick={() => {setMyColor('blue')}}>Click</button>
      

    </div>
  )
}

export default Contact