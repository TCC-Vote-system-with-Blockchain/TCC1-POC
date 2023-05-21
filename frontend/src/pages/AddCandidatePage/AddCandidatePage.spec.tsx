import React from 'react';
import { AddCandidatePage } from './AddCandidatePage';
import { render } from '@testing-library/react';

describe('VotePage', () => {
    it('Should render the VotePage component', () => {
        const document = render(<AddCandidatePage/>);
        expect(document.getByTestId('VotePage')).toBeInTheDocument();
    })
})