import { describe, expect, it } from 'vitest'

import { distribute } from '../Zone'

describe('neighbors', () => {
    it('ok', () => {

        expect(distribute(1, 3, 1)[0].filter(x => x == -1).length).toEqual(1)
        expect(distribute(1, 3, 1)[0].filter(x => x == 0).length).toEqual(2)
    }
    )
})