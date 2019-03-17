# TrySafe

> Safe and simple error handling for TypeScript, inspired by Golang and Scala

## Install

```sh
yarn add trysafe
```

## Usage

`Try` and `TryAsync` returns an `Either` type defined in fp-ts.

```ts
import { Try, TryAsync } from 'trysafe'

// sync
const result = Try(() => {
    if (condition) {
        throw new Error('failed')
        // or
        throw 'failed'
    }

    return 'succeeded'
})

// async
const result = await TryAsync(async () => {
    if (condition) {
        throw new Error('failed')
        // or
        throw 'failed'
    }

    return 'succeeded'
})

// result: Either<Error, string>

if (result.isLeft()) {
    // result.value: Error

    console.error(result.value.message) // -> 'failed'
    return
}

// result.value: string

console.log(result.value) // -> 'succeeded'
```
