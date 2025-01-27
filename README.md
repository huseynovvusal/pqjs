<div align="center">
    <div style="max-width: 400px; width: 50%;">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/huseynovvusal/pqjs/refs/heads/main/assets/logo-dark.png">
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/huseynovvusal/pqjs/refs/heads/main/assets/logo-light.png">
        <img alt="Pq.js" src="assets/logo-light.png">
    </picture>
    </div>
    <br/>
    <p align="center">
        <a href="https://www.npmjs.com/package/pqjs">
            <img src="https://img.shields.io/npm/v/pqjs.svg" alt="npm version">
        </a>
        <a href="https://github.com/huseynovvusal/pqjs/blob/main/LICENSE">
            <img src="https://img.shields.io/npm/l/pqjs.svg" alt="license">
        </a>
    </p>
    <p align="center">
        An efficient and easy-to-use priority queue.
    </p>

</div>

**Pq.js** provides a fast, straightforward priority queue to manage data based on priority. Ideal for sorting, task scheduling, or implementing priority-based logic in your app.

- ⚡ Simple and fast priority queue operations.
- 🔽🔼 Supports both **Min-Heap** and **Max-Heap** configurations.
- 🌱 No dependencies.

Perfect for anyone needing a priority queue implementation in JavaScript.

## Installation

```sh
npm install pqjs
```

## Usage

### Importing the PriorityQueue

```typescript
import PriorityQueue from "pqjs"
```

### Creating a PriorityQueue

```typescript
const pq = new PriorityQueue<number>()
```

### Creating a PriorityQueue with Initial Values

```typescript
const initialValues = [10, 5, 20]
const pq = new PriorityQueue<number>(initialValues)
```

### Adding Elements

```typescript
pq.push(10)
pq.push(5)
pq.push(20)
```

### Accessing the Top Element

```typescript
console.log(pq.top()) // 20 for Max-Heap by default
```

### Removing the Top Element

```typescript
console.log(pq.pop()) // 20
```

### Checking if the Queue is Empty

```typescript
console.log(pq.empty()) // false
```

### Clearing the Queue

```typescript
pq.clear()
console.log(pq.empty()) // true
```

### Converting to an Array

```typescript
console.log(pq.toArray()) // []
```

### Using a Comparator for Min-Heap

```typescript
const minHeapComparator = (a: number, b: number) => b - a
const minHeap = new PriorityQueue<number>([], minHeapComparator)

minHeap.push(10)
minHeap.push(5)
minHeap.push(20)

console.log(minHeap.pop()) // 5 for Min-Heap
console.log(minHeap.pop()) // 10 for Min-Heap
console.log(minHeap.pop()) // 20 for Min-Heap
```

## License

MIT © 2025 Vusal Huseynov
