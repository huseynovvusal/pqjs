import PriorityQueue, { Comparator } from "../src/PriorityQueue"

describe("PriorityQueue", () => {
  describe("Constructor", () => {
    it("should create an empty priority queue", () => {
      const queue = new PriorityQueue<number>()

      expect(queue.size).toBe(0)
      expect(queue.empty()).toBe(true)
    })

    it("should create a priority queue with initial values", () => {
      const queue = new PriorityQueue([1, 2, 3])

      expect(queue.size).toBe(3)
    })

    it("should pop values from the priority queue", () => {
      const values = [4, 297, 123, 98, 4865, 18, 10, 3, 7]

      const queue = new PriorityQueue(values)

      values.sort((a, b) => b - a)

      for (const value of values) {
        expect(queue.pop()).toBe(value)
      }

      expect(queue.size).toBe(0)
    })

    it("should pop values from the priority queue contains strings", () => {
      const values = ["apple", "banana", "cherry", "elderberry", "fig", "grape", "kiwi", "blueberry", "dragonfruit"]

      const queue = new PriorityQueue<string>(values)

      values.sort((a, b) => b.localeCompare(a))

      for (const value of values) {
        expect(queue.pop()).toBe(value)
      }
    })

    it("should peek the top value of the priority queue", () => {
      const queue = new PriorityQueue([1, 2, 3])

      expect(queue.top()).toBe(3)
      expect(queue.size).toBe(3)
    })

    it("should clear the priority queue", () => {
      const queue = new PriorityQueue([1, 2, 3])

      queue.clear()

      expect(queue.size).toBe(0)
      expect(queue.empty()).toBe(true)
    })

    it("should throw an error when popping from an empty priority queue", () => {
      const queue = new PriorityQueue<number>()

      expect(() => queue.pop()).toThrowError("Queue is empty. Cannot perform pop operation.")
    })

    it("should throw an error when peeking from an empty priority queue", () => {
      const queue = new PriorityQueue<number>()

      expect(() => queue.top()).toThrowError("Queue is empty. Cannot perform peek operation.")
    })
  })

  describe("Performance Cases", () => {
    it("should handle a large number of operations with random values", () => {
      const queue = new PriorityQueue<number>()

      for (let i = 0; i < 10000; i++) {
        queue.push(Math.floor(Math.random() * 10000))
      }

      const values: number[] = []

      while (!queue.empty()) {
        values.push(queue.pop())
      }

      for (let i = 1; i < values.length; i++) {
        expect(values[i - 1] >= values[i]).toBe(true)
      }
    })
  })

  describe("Custom Comparator", () => {
    it("should create a priority queue with a custom comparator", () => {
      const comparator: Comparator<number> = (a, b) => b - a
      const values = [4, 123, 7, 3, 18, 10, 297, 4865, 98]

      const queue = new PriorityQueue<number>(values, comparator)

      values.sort((a, b) => a - b)

      for (const value of values) {
        expect(queue.pop()).toBe(value)
      }
    })

    it("should create a priority queue contains strings with a custom comparator", () => {
      const comparator: Comparator<string> = (a, b) => (b > a ? 1 : b < a ? -1 : 0)
      const values = ["apple", "banana", "cherry", "elderberry", "fig", "grape", "kiwi", "blueberry", "dragonfruit"]

      const queue = new PriorityQueue<string>(values, comparator)

      values.sort((a, b) => a.localeCompare(b))

      // !
      console.log(values)

      for (const value of values) {
        expect(queue.pop()).toBe(value)
      }
    })
  })

  describe("Tricky Cases", () => {
    it("should handle a priority queue with a single element", () => {
      const queue = new PriorityQueue([1])

      expect(queue.pop()).toBe(1)
      expect(queue.size).toBe(0)
    })

    it("should handle a priority queue with multiple elements", () => {
      const values = [5, 8, 10, 2, 5, 10, 3, 2, 5, 8]

      const queue = new PriorityQueue(values)

      values.sort((a, b) => b - a)

      for (const value of values) {
        expect(queue.pop()).toBe(value)
      }

      expect(queue.size).toBe(0)
    })
  })
})
