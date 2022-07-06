import _ from "lodash"
// const _ = require('lodash');


export function distribute(minesCount: number, width: number, height: number) {
    const a = Array<number>(minesCount).fill(-1)  //创建指定大小的数组
    const b = Array<number>(width * height - minesCount).fill(0) //填充 数组

    const r = a.concat(b) //合并
    return _.chunk(_.shuffle(r), 3) //摇一摇分区
}

// console.log(Array(99).fill(-1))
// console.log(Array(30 * 16 - 99).fill(0))




// console.log(_.shuffle(r)) //摇一摇
// console.log(_.chunk(r, 3))  //分区
