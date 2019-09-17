import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import Header from './Header'

afterEach(cleanup)


describe('Header Tests', () => {
    
    let component
    const header = {
        text: 'Component testing is done with react-testing-library',
        size: 'h2'
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

})
