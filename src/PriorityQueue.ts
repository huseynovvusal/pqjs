/**
 * @copyright 2025 Vusal Huseynov
 * @license MIT
 */

export type Comparator<T> = (a: T, b: T) => number

/**
 * @class PriorityQueue
 */
/**
 * A priority queue implementation in TypeScript.
 *
 * @template T - The type of elements held in the priority queue.
 */
export default class PriorityQueue<T> {
  private values: T[] = []
  private isGreater: (a: T, b: T) => boolean

  /**
   * Creates a priority queue.
   *
   * @param {T[]} [values=[]] - Initial values to populate the priority queue.
   * @param {(a: T, b: T) => number} [compare=(a, b) => (a > b ? 1 : a < b ? -1 : 0)] - Comparator function to determine the order of elements.
   */
  constructor(values: T[] = [], compare: Comparator<T> = (a, b) => (a > b ? 1 : a < b ? -1 : 0)) {
    this.isGreater = (a, b) => compare(a, b) > 0

    for (const value of values) {
      this.push(value)
    }
  }

  /**
   * Gets the number of elements in the priority queue.
   *
   * @returns {number} The size of the priority queue.
   */
  get size() {
    return this.values.length
  }

  /**
   * Checks if the priority queue is empty.
   *
   * @returns {boolean} True if the priority queue is empty, false otherwise.
   */
  empty(): boolean {
    return this.size === 0
  }

  /**
   * Retrieves the top (highest priority) element of the priority queue without removing it.
   *
   * @returns {T} The top element of the priority queue.
   * @throws {Error} If the priority queue is empty.
   */
  top(): T {
    if (this.empty()) {
      throw new Error("Queue is empty. Cannot perform peek operation.")
    }

    return this.values[0]
  }

  /**
   * Adds a new element to the priority queue.
   *
   * @param {T} value - The element to add to the priority queue.
   */
  push(value: T): void {
    this.values.push(value)

    this.shiftUp(this.size - 1)
  }

  /**
   * Removes and returns the top (highest priority) element of the priority queue.
   *
   * @returns {T} The removed top element of the priority queue.
   * @throws {Error} If the priority queue is empty.
   */
  pop(): T {
    if (this.empty()) {
      throw new Error("Queue is empty. Cannot perform pop operation.")
    }

    const topValue = this.values[0]
    const lastValue = this.values.pop()

    if (!this.empty() && lastValue !== undefined) {
      this.values[0] = lastValue
      this.shiftDown(0)
    }

    return topValue
  }

  /**
   * Removes all elements from the priority queue.
   */
  clear(): void {
    this.values = []
  }

  /**
   * Converts the priority queue to an array.
   *
   * @returns {T[]} An array containing all elements of the priority queue.
   */
  toArray(): T[] {
    return [...this.values]
  }

  /**
   * Gets the parent index and value of a given index.
   *
   * @param {number} index - The index to get the parent for.
   * @returns {[number, T]} A tuple containing the parent index and value.
   */
  private getParent(index: number): [number, T] {
    const parentIndex = (index - 1) >>> 1

    return [parentIndex, this.values[parentIndex]]
  }

  /**
   * Shifts an element up the priority queue to maintain the heap property.
   *
   * @param {number} index - The index of the element to shift up.
   */
  private shiftUp(index: number): void {
    const value = this.values[index]

    while (index > 0) {
      const [parentIndex, parentValue] = this.getParent(index)

      if (this.isGreater(parentValue, value)) {
        break
      }

      this.values[index] = parentValue
      index = parentIndex
    }

    this.values[index] = value
  }

  /**
   * Shifts an element down the priority queue to maintain the heap property.
   *
   * @param {number} index - The index of the element to shift down.
   */
  private shiftDown(index: number): void {
    const length = this.size
    const value = this.values[index]

    while (true) {
      const leftChildIndex = (index << 1) + 1
      const rightChildIndex = (index << 1) + 2

      let swapIndex: number | null = null

      if (leftChildIndex < length && this.isGreater(this.values[leftChildIndex], value)) {
        swapIndex = leftChildIndex
      }

      if (
        rightChildIndex < length &&
        this.isGreater(this.values[rightChildIndex], swapIndex ? this.values[swapIndex] : value)
      ) {
        swapIndex = rightChildIndex
      }

      if (swapIndex === null) {
        break
      }

      this.values[index] = this.values[swapIndex]
      index = swapIndex
    }

    this.values[index] = value
  }
}
