import React from 'react';
import About from '..';
import '@testing-library/jest-dom/extend-expect';

import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => { 
        render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About component
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })
})