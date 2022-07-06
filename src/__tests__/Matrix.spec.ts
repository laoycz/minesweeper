import { describe, expect, it } from 'vitest'

import Matrix from '../Matrix'

describe('neighbors', () => {
    it('ok', () => {
        const matrix = new Matrix([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ])
        expect(matrix.neighbors([0, 0])).toEqual([
            [1, 0],
            [0, 1],
            [1, 1],
        ])
    })
})
