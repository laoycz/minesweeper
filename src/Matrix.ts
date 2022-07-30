import { max, values } from "lodash";

class Matrix<T> {
  public matrix: T[][];
  width: number;
  height: number;

  constructor(matrix: T[][]) {
    this.matrix = matrix;
    this.width = matrix[0].length;
    this.height = matrix.length;
  }

  get([x, y]: [number, number]) {
    return this.matrix[y][x];
  } // 从坐标获取值

  set([x, y]: [number, number], value: T) {
    this.matrix[y][x] = value;
  } //用值替换坐标位置

  // map<T1>(func: (value: T, i: [number, number]) => T1) {
  //   return this.matrix.map((row, y) =>
  //     row.map((cell, x) => func(cell, [x, y]))
  //   );
  // }

  map<T1>(func: (value: T, i: [number, number]) => T1) {
    return new Matrix(
      this.matrix.map((row, y) => row.map((cell, x) => func(cell, [x, y])))
    );
  }

  neighbors([x, y]: [number, number]) {
    return (
      [
        [x - 1, y - 1],
        [x, y - 1],
        [x + 1, y - 1],
        [x - 1, y],
        [x + 1, y],
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1],
      ] as [number, number][]
    ).filter(
      ([ix, iy]) => ix >= 0 && ix < this.width && iy >= 0 && iy < this.height
    );
  }
}

export default Matrix;

// console.log(
//     matrix.neighbors([2, 2]).map(a => matrix.get(a))
// )  //从坐标获取邻居的值

// console.log([1, 2, 3, 4].map(a => a * 2)) // map用法

// console.log(matrix.neighbors([0, 0])) // 邻居坐标

// console.log(matrix.matrix[1][2])从数组中获取值

// console.log(matrix.get([2, 1]))从坐标获取值

// const arr = [[1, 2], [3, 4]]
// console.log(arr.map(a => a.map(b => b * 2)))

// const arr = ['a', 'b', 'c', 'd']
// arr.map((x, i) => console.log(x + (i + 1)))

// const matrix = new Matrix([[1, 2], [3, 4]])

// console.log(matrix.map(x => x * 2))

// console.log(matrix.map(x => x * x))

// const matrix = new Matrix([
//     [-1, -1, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ])

// console.log(matrix.neighbors([2, 0])) //找邻居坐标

// console.log(matrix.get([1, 0]))  //用坐标取值

// console.log(matrix.neighbors([2, 0]).map(a => matrix.get(a)))  //找到邻居坐标取值

// console.log([-1, 0, 0].filter(a => a == -1).length)  //过滤数字-1 取长度

// console.log(matrix.neighbors([2, 2]).map(a => matrix.get(a)).filter(a => a == -1).length) //找邻居坐标，取值，过滤数字，取长度

// console.log(matrix.map((value, index) => {
//     if (value == -1) return -1
//     else return matrix.neighbors(index).map(a => matrix.get(a)).filter(a => a == -1).length
// }))

// console.log(matrix.map((value, i) => {
//     if (value == -1) return -1
//     else return matrix.neighbors(i).map(a => matrix.get(a)).filter(a => a == -1).length
// }))
