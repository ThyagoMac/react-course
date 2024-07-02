import { render, screen } from "@testing-library/react";
import { Posts } from ".";

const props = {
  posts: [
    {
      id: 1,
      title: "Post Title Example1",
      body: "Post Body Example1",
      cover: "img/img1.png"
    },
    {
      id: 2,
      title: "Post Title Example2",
      body: "Post Body Example2",
      cover: "img/img2.png"
    },
    {
      id: 3,
      title: "Post Title Example3",
      body: "Post Body Example3",
      cover: "img/img3.png"
    },
  ]
}

describe("<Post />", () => {
  it("Render posts", () => {
    render(<Posts {...props} />);

    const postsHeadings = screen.getAllByRole("heading", { name: /title/i });
    const postsImgs = screen.getAllByRole("img", { name: /title/i });
    const postImgTwo = screen.getByRole("img", { name: /Title Example2/i });
    const p = screen.getAllByText(/body/i);

    expect(postImgTwo).toHaveAttribute("src", "img/img2.png");
    expect(postsImgs).toHaveLength(3);
    expect(postsHeadings).toHaveLength(3);
    expect(p).toHaveLength(3);

  });

  it("Should not render with empty posts", () => {
    render(<Posts />);;

    expect(screen.queryByRole("heading", { name: /title/i }))
      .not.toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { container } = render(<Posts {...props} />);;

    expect(container.firstChild).toMatchSnapshot();
  });
});