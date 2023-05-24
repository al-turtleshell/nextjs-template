/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home component', () => {
  test('renders main heading', () => {
    render(<Home />);
    
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement.textContent).toBe('Turtleshell');
  });
});