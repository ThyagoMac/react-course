/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Button } from './index.jsx';

describe("<Button />", () => {
  it("Render button with text prop", () => {
      render(<Button text="More Posts" />);

      const button = screen.getByRole("button", { name: /more posts/i });
      expect(button).toBeInTheDocument();
  });

  it("Shout call function onClick", () => {
    //create mock function and put it on btn
    const fn = jest.fn();

    //Arrange: get btn in screen
    render(<Button text="More Posts" onClick={fn} />);
    const button = screen.getByRole("button", { name: /more posts/i });

    //act: user action
    fireEvent.click(button);
    userEvent.click(button);

    //Assert: what expect
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("Shout be disabled when disabled is true", () => {
    render(<Button text="More Posts" disabled={true} />);

    const button = screen.getByRole("button", { name: /more posts/i });
    expect(button).toBeDisabled();
  });

  it("Shout be disabled when enable is false", () => {
    render(<Button text="More Posts" disabled={false} />);

    const button = screen.getByRole("button", { name: /more posts/i });
    expect(button).toBeEnabled();
  });

  it("Shout match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<Button text="More Posts" onClick={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
