import PriorityQueue from "../src/PriorityQueue";
describe("PriorityQueue", function () {
    describe("Constructor", function () {
        it("should create an empty priority queue", function () {
            var queue = new PriorityQueue();
            expect(queue.size).toBe(0);
            expect(queue.empty()).toBe(true);
        });
        it("should create a priority queue with initial values", function () {
            var queue = new PriorityQueue([1, 2, 3]);
            expect(queue.size).toBe(3);
        });
        it("should pop values from the priority queue", function () {
            var values = [4, 297, 123, 98, 4865, 18, 10, 3, 7];
            var queue = new PriorityQueue(values);
            values.sort(function (a, b) { return b - a; });
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                expect(queue.pop()).toBe(value);
            }
            expect(queue.size).toBe(0);
        });
        it("should pop values from the priority queue contains strings", function () {
            var values = ["apple", "banana", "cherry", "elderberry", "fig", "grape", "kiwi", "blueberry", "dragonfruit"];
            var queue = new PriorityQueue(values);
            values.sort(function (a, b) { return b.localeCompare(a); });
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                expect(queue.pop()).toBe(value);
            }
        });
        it("should peek the top value of the priority queue", function () {
            var queue = new PriorityQueue([1, 2, 3]);
            expect(queue.top()).toBe(3);
            expect(queue.size).toBe(3);
        });
        it("should clear the priority queue", function () {
            var queue = new PriorityQueue([1, 2, 3]);
            queue.clear();
            expect(queue.size).toBe(0);
            expect(queue.empty()).toBe(true);
        });
        it("should throw an error when popping from an empty priority queue", function () {
            var queue = new PriorityQueue();
            expect(function () { return queue.pop(); }).toThrowError("Queue is empty. Cannot perform pop operation.");
        });
        it("should throw an error when peeking from an empty priority queue", function () {
            var queue = new PriorityQueue();
            expect(function () { return queue.top(); }).toThrowError("Queue is empty. Cannot perform peek operation.");
        });
    });
    describe("Performance Cases", function () {
        it("should handle a large number of operations with random values", function () {
            var queue = new PriorityQueue();
            for (var i = 0; i < 10000; i++) {
                queue.push(Math.floor(Math.random() * 10000));
            }
            var values = [];
            while (!queue.empty()) {
                values.push(queue.pop());
            }
            for (var i = 1; i < values.length; i++) {
                expect(values[i - 1] >= values[i]).toBe(true);
            }
        });
    });
    describe("Custom Comparator", function () {
        it("should create a priority queue with a custom comparator", function () {
            var comparator = function (a, b) { return b - a; };
            var values = [4, 123, 7, 3, 18, 10, 297, 4865, 98];
            var queue = new PriorityQueue(values, comparator);
            values.sort(function (a, b) { return a - b; });
            for (var _i = 0, values_3 = values; _i < values_3.length; _i++) {
                var value = values_3[_i];
                expect(queue.pop()).toBe(value);
            }
        });
        it("should create a priority queue contains strings with a custom comparator", function () {
            var comparator = function (a, b) { return (b > a ? 1 : b < a ? -1 : 0); };
            var values = ["apple", "banana", "cherry", "elderberry", "fig", "grape", "kiwi", "blueberry", "dragonfruit"];
            var queue = new PriorityQueue(values, comparator);
            values.sort(function (a, b) { return a.localeCompare(b); });
            // !
            console.log(values);
            for (var _i = 0, values_4 = values; _i < values_4.length; _i++) {
                var value = values_4[_i];
                expect(queue.pop()).toBe(value);
            }
        });
    });
    describe("Tricky Cases", function () {
        it("should handle a priority queue with a single element", function () {
            var queue = new PriorityQueue([1]);
            expect(queue.pop()).toBe(1);
            expect(queue.size).toBe(0);
        });
        it("should handle a priority queue with multiple elements", function () {
            var values = [5, 8, 10, 2, 5, 10, 3, 2, 5, 8];
            var queue = new PriorityQueue(values);
            values.sort(function (a, b) { return b - a; });
            for (var _i = 0, values_5 = values; _i < values_5.length; _i++) {
                var value = values_5[_i];
                expect(queue.pop()).toBe(value);
            }
            expect(queue.size).toBe(0);
        });
    });
});
