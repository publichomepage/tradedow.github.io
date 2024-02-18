## Two Sum
Given Two variables add them and return

#### Example 1:
- Input: a = 1, b = 2
- Output: 3
- Explanation: Because a and b are numbers.

#### Example 2:
- Input: a = 'A', b = 'B'
- Output: "AB"

#### Example 3:
- Input: a = [1, 2], b = [3,4]
- Output: "1,23,4"

#### Example 4:
- Input: a = ["AB", "12"], b = ["34","CD"]
- Output: "AB,1234,CD"
  
Only one valid answer exists.

```javascript
<!-- question -->
function twoSum(a, b) {
    //Your code goes here
};
```
```javascript
<!-- correct_solution -->
function twoSum(a, b) {
    return a + b ;
};
```
```javascript
<!-- runOneTestCaseHandler -->
var runOneTestCaseHandler(args) {
    return twoSum(...args) ;
}
var result = runOneTestCaseHandler(inputArgs);
console.log('Test case returned : ' + result) ;
```
```javascript
<!-- runAllTestCases -->
var runAllTestCases() {
    const totalTestCases = 3 ;
    const inputs = [[1,2],[[1,2], [3]],['A', 'B']];
    const expectedResults = [3, [1,2,3], 'AB'];
    
    for(const i = 0 ; i < totalTestCases.length ; i++) {
        const input = inputs[i] ;
        var result = twoSum(input[0], input[1]);
        if(expectedResults[i] !== result) {
            throw new Error('Test case failed for input a : ' + input[0] + ' b = ' + input[1]);
        }
    }
    return true ;
}
var result = runAllTestCases();
console.log('All test cases passed : ' + result) ;
```