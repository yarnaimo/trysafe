import { Either, left, right } from 'fp-ts/lib/Either'

export const asError = (value: any) => (value instanceof Error ? value : new Error(value))

export function Try<T>(fn: () => T): Either<Error, T> {
    try {
        const result = fn()
        return right(result)
    } catch (error) {
        return left(asError(error))
    }
}

export async function TryAsync<T>(fn: () => Promise<T>): Promise<Either<Error, T>> {
    return fn()
        .then(v => right<Error, T>(v))
        .catch(error => left<Error, T>(asError(error)))
}
