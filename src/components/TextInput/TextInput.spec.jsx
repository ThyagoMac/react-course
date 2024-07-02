import { render, screen } from "@testing-library/react";
import { TextInput } from ".";
import userEvent from "@testing-library/user-event";

describe("<TextInput />", () => {
  it("Should have a value on searchValue", () => {
    const fn = jest.fn();

    render(
      <TextInput
        handleSearch={fn}
        searchValue={"Testing"}
        placeholder={"Filter posts"}
      />
    );

    const textInput = screen.getByPlaceholderText(/filter posts/i)

    expect(textInput).toBeInTheDocument();
    expect(textInput.value).toBe("Testing");
  });

  it("Should call handleSearch() on each key press", () => {
    const fn = jest.fn();

    render(
      <TextInput
        handleSearch={fn}
        placeholder={"Filter posts"}
      />
    );

    const textInput = screen.getByPlaceholderText(/filter posts/i)
    const val = "user typing text";

    userEvent.type(textInput, val);

    expect(textInput.value).toBe(val);
    expect(fn).toHaveBeenCalledTimes(val.length);
  });

  it("Should match snapshot", () => {
    const fn = jest.fn();

    const { container } = render(
      <TextInput
        handleSearch={fn}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});