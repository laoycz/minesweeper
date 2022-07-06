class Matrix {
    public matrix: number[][]
    width: number
    height: number

    constructor(matrix: number[][]) {
        this.matrix = matrix
        this.width = matrix[0].length
        this.height = matrix.length
    }

    get([x, y]: [number, number]) {
        return this.matrix[y][x]
    }  // 从坐标获取值

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
                [x + 1, y + 1]
            ] as [number, number][]
        ).filter(
            ([ix, iy]) => ix >= 0 && ix < this.width && iy >= 0 && iy < this.height
        )
    }

}

export default Matrix

// console.log(
//     matrix.neighbors([2, 2]).map(a => matrix.get(a))
// )  //从坐标获取邻居的值

// console.log([1, 2, 3, 4].map(a => a * 2)) // map用法

// console.log(matrix.neighbors([0, 0])) // 邻居坐标

// console.log(matrix.matrix[1][2])从数组中获取值

// console.log(matrix.get([2, 1]))从坐标获取值