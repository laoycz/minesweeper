import { describe, expect, it } from "vitest";

import { distribute, fill } from "../Zone";

import Matrix from "../Matrix";

describe("distribute", () => {
  it("ok", () => {
    expect(distribute(1, 3, 1)[0].filter((x) => x == -1).length).toEqual(1);
    expect(distribute(1, 3, 1)[0].filter((x) => x == 0).length).toEqual(2);
  });
});

describe("fill", () => {
  it("ok", () => {
    const matrix = new Matrix([[-1, 0, 0]]);
    expect(fill(matrix).matrix).toEqual([[-1, 1, 0]]);
  });
});
