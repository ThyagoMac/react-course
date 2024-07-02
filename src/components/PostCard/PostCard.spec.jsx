import { render, screen } from "@testing-library/react";
import { PostCard } from "./index.jsx";

import { mockPost } from "./mock.js";

describe("<PostCard />", () => {
  it("Render postcard", () => {
    /* debugger test
    const { debug } = render(<PostCard post={mockPost} />);
    debug();
    */

    render(<PostCard post={mockPost} />);

    const postCard = screen.getByRole("img", { name: /title example/i });
    const heading = screen.getByRole("heading", { name: /title example/i });
    const p = screen.getByText(/body example/i);

    expect(postCard).toHaveAttribute("src", mockPost.cover);
    expect(heading).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { container } = render(<PostCard post={mockPost} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});