# Implement reduce

The **reduce()** method should **take in an array**, a **reducer** function and the **initial value for the accumulator**, and **apply** the given function **against the accumulator for each element** in the given array (from left to right) to reduce it to a **single value** and return it.

**Reducer: params**: ```accumulator```, ```currentItem```, ```index```(optional)
	 *calcualte something from the current value, save it in the accumulator, finally return the accumulator.

## Example:

* exampleArray: ```[1,2,3,4,5]```
* exampleReducer: ```function (acc, curr) { return acc += curr}```

```Reduce(exampleArray, exampleReducer, 0) // returns 15```
