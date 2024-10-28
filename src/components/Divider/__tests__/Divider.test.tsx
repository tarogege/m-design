import { render } from "@testing-library/react";
import { Divider } from "maodesign";

describe("test divider component", () => {
  it("render a default divider", () => {
    const c = render(<Divider />);
    const tree = c.asFragment;
    expect(tree).toMatchSnapshot();
  });
});
