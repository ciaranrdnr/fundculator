import { calculateInvestment, moneyDot } from "../../helper";

describe("moneyDot Function", () => {
  it("returns empty string for null or undefined input", () => {
    expect(moneyDot(null)).toBe("");
    expect(moneyDot(undefined)).toBe("");
  });

  it("formats number with commas correctly", () => {
    expect(moneyDot(1000)).toBe("1.000");
    expect(moneyDot(123456789)).toBe("123.456.789");
  });

  it("handles zero value correctly", () => {
    expect(moneyDot(0)).toBe("0");
  });
});

describe("calculateInvestment Function", () => {
  it("calculates monthly investment and total amount payable correctly", () => {
    const result = calculateInvestment(1000000, 5, 10, 2);
    expect(result.monthlyInvestment).toBe(6236);
    expect(result.totalAmountPayable).toBe(748357);
  });
});
