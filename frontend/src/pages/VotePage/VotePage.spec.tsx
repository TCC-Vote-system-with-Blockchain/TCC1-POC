import React from 'react';
import { VotePage } from './VotePage';
import { render } from '@testing-library/react';

describe('VotePage', () => {
    it('Should render the VotePage component', () => {
        const document = render(<VotePage/>);
        expect(document.getByTestId('VotePage')).toBeInTheDocument();
    })
})