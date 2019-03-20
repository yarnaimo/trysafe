import { Either, left, right, toError } from 'fp-ts/lib/Either'

export function Try<T>(fn: () => T): Either<Error, T> {
    try {
        const result = fn()
        return right(result)
    } catch (error) {
        return left(toError(error))
    }
}

export async function TryAsync<T>(fn: () => Promise<T>): Promise<Either<Error, T>> {
    return fn()
        .then(v => right<Error, T>(v))
        .catch(error => left<Error, T>(toError(error)))
}
