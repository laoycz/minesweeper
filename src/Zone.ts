import _ from "lodash";
import type Matrix from "./Matrix";
// const _ = require('lodash');

export function distribute(minesCount: number, width: number, height: number) {
  const a = Array<number>(minesCount).fill(-1); //创建指定大小的数组
  const b = Array<number>(width * height - minesCount).fill(0); //填充 数组

  const r = a.concat(b); //合并
  return _.chunk(_.shuffle(r), width); //摇一摇分区
}

// console.log(Array(99).fill(-1))
// console.log(Array(30 * 16 - 99).fill(0))
export function fill(matrix: Matrix<number>) {
  return matrix.map((value, i) => {
    if (value == -1) return -1;
    else
      return matrix
        .neighbors(i)
        .map((a) => matrix.get(a))
        .filter((a) => a == -1).length;
  });
}

export function fillStatus(matrix: Matrix<number>) {
  return matrix.map<[number, boolean]>((value) => {
    return [value, false];
  });
}

// console.log(_.shuffle(r)) //摇一摇
// console.log(_.chunk(r, 3))  //分区
