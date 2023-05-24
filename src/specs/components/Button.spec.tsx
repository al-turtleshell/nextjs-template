/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";
import '@testing-library/jest-dom'

describe('Button', () => {
    it('should render a button', () => {
        render(<Button />);
        const buttonElement = screen.getByText(/Click me!/i);
        expect(buttonElement).toBeInTheDocument();
    });
});