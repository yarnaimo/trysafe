# TrySafe

> Safe and simple error handling for TypeScript, inspired by Golang and Scala

## Install

```sh
yarn add trysafe
```

## Usage

`Try` and `TryAsync` returns an `Either` type defined in fp-ts.

### Sync

```ts
import { Try } from 'trysafe'

const result = Try(() => {
    if (condition) {
        throw new Error('failed')
        // or
        throw 'failed'
    }

    return 'succeeded'
})

// typeof result: Either<Error, string>

if (result.isLeft()) {
    // typeof result.value: Error

    console.error(result.value.message) // -> 'failed'
    return
}

// typeof result.value: string

console.log(result.value) // -> 'succeeded'
```

### Async

```ts
import { TryAsync } from 'trysafe'

const result = await TryAsync(async () => {
    if (condition) {
        throw new Error('failed')
        // or
        throw 'failed'
    }

    return 'succeeded'
})

// typeof result: Either<Error, string>

if (result.isLeft()) {
    // typeof result.value: Error

    console.error(result.value.message) // -> 'failed'
    return
}

// typeof result.value: string

console.log(result.value) // -> 'succeeded'
```
