import { render, screen } from "@testing-library/react";
import { baselineComponent } from "../../testing/utils";
import { GridAvatar, GridAvatarProps, MAX_GRID_LENGTH } from "./GridAvatar";

const GridAvatarTest = (props: GridAvatarProps) => (
  <GridAvatar {...props} data-testid="grid_avatar" />
);

const avatar = () => screen.getByTestId("grid_avatar");
const items = () => avatar().querySelectorAll(".vkuiGridAvatar__item");

describe("GridAvatar", () => {
  baselineComponent(GridAvatar);

  it(`doesn't show more than ${MAX_GRID_LENGTH} items in grid`, () => {
    render(<GridAvatarTest src={["#", "#", "#", "#", "#"]} />);
    expect(items().length).toBe(MAX_GRID_LENGTH);
  });
});
