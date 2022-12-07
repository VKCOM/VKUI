import React, { type ReactNode } from "react";
import { render } from "@testing-library/react";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";
import { baselineComponent } from "../../testing/utils";
import { DatePicker } from "./DatePicker";
import userEvent from "@testing-library/user-event";

const getDate = (year = 2021, month = 1, day = 1) => ({ year, month, day });

describe("DatePicker", () => {
  baselineComponent(DatePicker);

  describe("custom", () => {
    const forceCustom = (jsx: ReactNode) => (
      <AdaptivityProvider hasPointer>{jsx}</AdaptivityProvider>
    );
    const getByName = (name: string) =>
      document.getElementsByName(name)[0] as HTMLInputElement;
    const select = (name: string, value: number) =>
      userEvent.selectOptions(getByName(name), String(value));

    it("renders value", () => {
      render(forceCustom(<DatePicker name="date" defaultValue={getDate()} />));
      expect(getByName("year")).toHaveValue("2021");
      expect(getByName("month")).toHaveValue("1");
      expect(getByName("day")).toHaveValue("1");
      expect(getByName("date")).toHaveValue("2021-01-01");
    });

    it("fires change", () => {
      let date = getDate();
      render(
        forceCustom(
          <DatePicker
            defaultValue={date}
            name="date"
            onDateChange={(v) => (date = v)}
          />
        )
      );

      select("year", 2019);
      expect(date).toEqual(getDate(2019, 1, 1));
      expect(getByName("date")).toHaveValue("2019-01-01");

      select("month", 5);
      expect(date).toEqual(getDate(2019, 5, 1));
      expect(getByName("date")).toHaveValue("2019-05-01");

      select("day", 5);
      expect(date).toEqual(getDate(2019, 5, 5));
      expect(getByName("date")).toHaveValue("2019-05-05");
    });

    describe("renders options", () => {
      const getOptions = (name: string) =>
        Array.from(getByName(name).querySelectorAll("option")).map(
          (e) => e.value
        );

      it("year, with min/max", () => {
        render(
          forceCustom(<DatePicker min={getDate(2018)} max={getDate(2020)} />)
        );
        expect(getOptions("year")).toEqual(["2020", "2019", "2018"]);
      });

      describe("month", () => {
        const months = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
        ];

        it("without min / max", () => {
          render(forceCustom(<DatePicker />));
          expect(getOptions("month")).toEqual(months);
        });

        it.skip("respects min", () => {
          render(
            forceCustom(
              <DatePicker defaultValue={getDate()} min={getDate(2022, 11)} />
            )
          );
          expect(getOptions("month")).toEqual(months);
          select("year", 2022);
          expect(getOptions("month")).toEqual(["11", "12"]);
        });

        it.skip("respects max", () => {
          render(
            forceCustom(
              <DatePicker defaultValue={getDate()} max={getDate(2018, 2)} />
            )
          );
          expect(getOptions("month")).toEqual(months);
          select("year", 2018);
          expect(getOptions("month")).toEqual(["1", "2"]);
        });
      });

      describe("day", () => {
        const days = (count: number) =>
          new Array(count).fill(0).map((_, i) => String(i + 1));

        it("depends on month", () => {
          render(forceCustom(<DatePicker />));
          // allows 31 by default
          expect(getOptions("day")).toEqual(days(31));

          select("month", 5);
          expect(getOptions("day")).toEqual(days(31));

          select("month", 4);
          expect(getOptions("day")).toEqual(days(30));
        });

        describe("respects gap year", () => {
          it("allows 29 by default", () => {
            render(forceCustom(<DatePicker />));
            select("month", 2);
            expect(getOptions("day")).toEqual(days(29));
          });

          it("allows 29 in gap year", () => {
            render(forceCustom(<DatePicker defaultValue={getDate(2020, 2)} />));
            expect(getOptions("day")).toEqual(days(29));
          });

          it("allows 28 in non-gap year", () => {
            render(forceCustom(<DatePicker defaultValue={getDate(2019, 2)} />));
            expect(getOptions("day")).toEqual(days(28));
          });
        });

        it.skip("respects min", () => {
          const min = getDate(2022, 11, 29);
          render(forceCustom(<DatePicker defaultValue={min} min={min} />));
          expect(getOptions("day")).toEqual(["29", "30"]);
        });

        it.skip("respects max", () => {
          const max = getDate(2018, 2, 2);
          render(forceCustom(<DatePicker defaultValue={max} min={max} />));
          expect(getOptions("day")).toEqual(["1", "2"]);
        });
      });
    });
  });

  describe("native", () => {
    const forceNative = (jsx: ReactNode) => (
      <AdaptivityProvider hasPointer={false}>{jsx}</AdaptivityProvider>
    );
    const getInput = () => document.querySelector("input") as Element;

    it("renders value", () => {
      render(forceNative(<DatePicker defaultValue={getDate()} />));
      expect(getInput()).toHaveValue("2021-01-01");
    });

    it("sets min/max", () => {
      render(forceNative(<DatePicker min={getDate()} max={getDate()} />));
      expect(getInput()).toHaveAttribute("min", "2021-01-01");
      expect(getInput()).toHaveAttribute("max", "2021-01-01");
    });

    it("fires change", () => {
      let date = getDate();
      render(forceNative(<DatePicker onDateChange={(v) => (date = v)} />));

      userEvent.type(getInput(), "2019-05-05");
      expect(date).toEqual(getDate(2019, 5, 5));
    });
  });
});
