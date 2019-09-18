import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Header from './Header'

afterEach(cleanup)


describe('Header Tests', () => {
    
    let component
    const header = {
        text: 'Component testing is done with react-testing-library',
        size: 'h1'
    }

    beforeEach(() => {
        component = render(
            <Header header={header} />
        )
    })

    test('renders content', () => {

        //component.debug()
        expect(component.container).toHaveTextContent(
            'Component testing is done with react-testing-library'
        )
    })

    test('right size header content', () => {
        const h1 = component.container.querySelector('h1')
        //component.debug()
        //console.log(prettyDOM(h1))
        expect(prettyDOM(h1))
    })

})
