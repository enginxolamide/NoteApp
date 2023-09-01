import './App.css'

const Hello = ({name, age})=>{
  return (
    <div>
      <h1>Hello world</h1>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}


function App() {
  return (
   <div>
<Hello name='Olamide' age='32'/>
<Hello/>
<Hello/>
   </div>
  )
}

export default App
