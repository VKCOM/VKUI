import { baselineComponent } from "../../testing/utils";
import { fireEvent, render, screen, queryByText } from "@testing-library/react";
import { ChipsSelect, ChipsSelectProps } from "./ChipsSelect";
import userEvent from "@testing-library/user-event";
import { ChipsInputOption } from "../ChipsInput/ChipsInput";

const ChipsSelectTest = (props: ChipsSelectProps<ChipsInputOption>) => (
  <ChipsSelect data-testid="chips-select" {...props} />
);
// const redChip = () => screen.queryByText('Красный');
const getChipsSelect = () => screen.getByTestId("chips-select");

const colors: ChipsInputOption[] = [
  { value: "red", label: "Красный" },
  { value: "blue", label: "Синий" },
  { value: "navarin", label: "Наваринского пламени с дымом" },
];
const toggleDropdown = () => userEvent.click(screen.getByRole("textbox"));
// получить опцию из дропдауна (не чип)
const queryListOption = (o: ChipsInputOption | null | undefined) => {
  const list = document.querySelector(".ChipsSelect__options") as HTMLElement;
  return list ? queryByText(list, o?.label as string) : null;
};

describe("ChipsSelect", () => {
  baselineComponent(ChipsSelect);

  it("renders empty text", () => {
    render(<ChipsSelect options={[]} value={[]} emptyText="__empty__" />);
    toggleDropdown();
    expect(screen.queryByText("__empty__")).toBeTruthy();
  });

  it("filters options", () => {
    render(<ChipsSelect options={colors} value={[]} />);
    userEvent.type(
      screen.getByRole("textbox"),
      colors[1]?.label?.substring(0, 3) as string
    );
    toggleDropdown();
    expect(queryListOption(colors[1])).toBeTruthy();
    expect(screen.queryAllByRole("option")).toHaveLength(1);
  });

  it("shows spinner if fetching", () => {
    render(<ChipsSelect fetching value={[]} />);
    toggleDropdown();
    expect(screen.queryByRole("status")).toBeTruthy();
  });

  describe("controls dropdown", () => {
    it.each(["click", "focus"])("opens options on %s", (e) => {
      render(<ChipsSelect options={colors} value={[]} />);
      e === "focus"
        ? fireEvent.focus(screen.getByRole("textbox"))
        : toggleDropdown();
      expect(screen.getAllByRole("option")[0]).toBeTruthy();
    });
    it("closes options on click outside", () => {
      render(<ChipsSelect options={colors} value={[]} />);
      toggleDropdown();
      userEvent.click(document.body);
      expect(screen.queryByRole("option")).toBeNull();
    });
    it("closes options after select", () => {
      render(<ChipsSelect options={colors} value={[]} />);
      toggleDropdown();
      userEvent.click(queryListOption(colors[0]) as Element);
      expect(queryListOption(colors[1])).toBeNull();
    });
    it("closes options on esc", () => {
      render(<ChipsSelect options={colors} value={[]} />);
      toggleDropdown();
      userEvent.type(screen.getByRole("textbox"), "{esc}");
      expect(queryListOption(colors[1])).toBeNull();
    });
  });

  describe("selects", () => {
    it("on click", () => {
      let value;
      render(
        <ChipsSelect
          options={colors}
          onChange={(e) => (value = e)}
          value={[]}
        />
      );
      toggleDropdown();
      userEvent.click(queryListOption(colors[0]) as Element);
      expect(value).toEqual([colors[0]]);
    });
    it("hides selected option from list", () => {
      render(<ChipsSelect options={colors} value={[colors[0]]} />);
      toggleDropdown();
      expect(queryListOption(colors[0])).toBeNull();
    });
    it("deselects on chip click", () => {
      let value;
      render(
        <ChipsSelect
          options={colors}
          value={[colors[0]]}
          onChange={(e) => (value = e)}
        />
      );
      userEvent.click(screen.getByLabelText(`Удалить ${colors[0].label}`));
      expect(value).toEqual([]);
    });
  });

  it("does not focus ChipsSelect on chip click", () => {
    let selectedColors: ChipsInputOption[] = [
      { value: "red", label: "Красный" },
    ];
    const setSelectedColors = (updatedColors: ChipsInputOption[]) => {
      selectedColors = [...updatedColors];
    };

    const colorsChipsProps = {
      value: selectedColors,
      onChange: setSelectedColors,
      options: colors,
      top: "Выберите или добавьте цвета",
      placeholder: "Не выбраны",
      creatable: true,
    };

    render(<ChipsSelectTest {...colorsChipsProps} />);

    const redChipRemove = screen.getByLabelText("Удалить Красный");

    userEvent.click(redChipRemove);
    expect(getChipsSelect()).not.toHaveFocus();
  });
});
