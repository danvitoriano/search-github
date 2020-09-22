import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

test('renders "search" word', () => {
    const { getByText } = render(<Text type="title" fontSize="80" />);
    const linkElement = getByText(/search/i);
    expect(linkElement).toBeInTheDocument();
});
