import { Try, TryAsync } from '..'

describe('Try', () => {
    test('return right', done => {
        const result = Try(() => {
            return 'succeeded'
        })

        if (result.isLeft()) {
            return done.fail()
        }

        expect(result.value).toBe('succeeded')
        done()
    })

    test('return left', done => {
        const result = Try(() => {
            throw 'failed'
        })

        if (result.isRight()) {
            return done.fail()
        }

        expect(result.value).toBeInstanceOf(Error)
        expect(result.value.message).toBe('failed')
        done()
    })
})

describe('TryAsync', () => {
    test('return right', async done => {
        const result = await TryAsync(async () => {
            return 'succeeded'
        })

        if (result.isLeft()) {
            return done.fail()
        }

        expect(result.value).toBe('succeeded')
        done()
    })

    test('return left', async done => {
        const result = await TryAsync(async () => {
            throw 'failed'
        })

        if (result.isRight()) {
            return done.fail()
        }

        expect(result.value).toBeInstanceOf(Error)
        expect(result.value.message).toBe('failed')
        done()
    })
})
