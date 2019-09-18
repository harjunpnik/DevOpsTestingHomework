  
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Form from './components/Form'

const App = () => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const onSubmit = (event) => {
        event.preventDefault()

        window.alert(newName + " with number " + newNumber +  " has been added")

        setNewName('')
        setNewNumber('')
        setSubmitted(true)
    }

    const handleNameChange = (event) => {
        //console.log(event.target.value)
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
        //console.log(event.target.value)
        setNewNumber(event.target.value)
    }

  return (
    <div>
        <Header header={{text: "This header is h1" , size: "h1"}}/>
        <Header header={{text: "This header is h2" , size: "h2"}}/>
        <Header header={{text: "This header is h3" , size: "h3"}}/>
        
        <Form
        onSubmit={onSubmit} 
        nameValue={newName} 
        handleNameChange={handleNameChange} 
        numberValue={newNumber} 
        handleNumberChange={handleNumberChange}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)