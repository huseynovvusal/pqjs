<img src="assets/logo.png" alt="PqJS Logo" width="30%" />

# PqJS

**PqJS** provides a fast, straightforward priority queue to manage data based on priority. Ideal for sorting, task scheduling, or implementing priority-based logic in your app.

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
const minHeapComparator = (a: number, b: number) => a - b
const minHeap = new PriorityQueue<number>([], minHeapComparator)

minHeap.push(10)
minHeap.push(5)
minHeap.push(20)

console.log(minHeap.top()) // 5 for Min-Heap
```

## License

MIT © 2025 Vusal Huseynov
