import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent  } from '@testing-library/react'
import Form from './Form'

afterEach(cleanup)

const Wrapper = (props) => {

    const onChangeName = (event) => {
      props.state.nameValue = event.target.value
    }
    
    const onChangeNumber = (event) => {
        props.state.numberValue = event.target.value
    }
  
    return (
      <Form
      onSubmit={props.onSubmit} 
      nameValue={props.state.nameValue} 
      handleNameChange={onChangeName} 
      numberValue={props.state.numberValue} 
      handleNumberChange={onChangeNumber}/>
    )
  } 

describe('Form Tests', () => {

    test('onsubmit test valid data', () => {

        const onSubmit = jest.fn()
        const state = {
            numberValue: '',
            nameValue: ''
        }

        const component = render(
            <Wrapper onSubmit={onSubmit} state={state} />
        )

        const nameInput = component.container.querySelector('.nameInput')
        const numberInput = component.container.querySelector('.numberInput')
        const form = component.container.querySelector('form')

        fireEvent.change(nameInput, { target: { value: 'Börje Svensson' } })
        fireEvent.change(numberInput, { target: { value: '1234123' } })
        fireEvent.submit(form)

        //console.log(component.container)
        expect(onSubmit.mock.calls.length).toBe(1)
        expect(state.numberValue).toBe('1234123')  
        expect(state.nameValue).toBe('Börje Svensson')  

    })
})