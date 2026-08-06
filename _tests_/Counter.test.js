import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

describe("Counter Component", () => {
  test("increments count when button is clicked", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /button/i })
    );

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});