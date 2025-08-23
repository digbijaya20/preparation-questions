
 
1. let inputJSON = { "name": "John", "children": [{ "name": "Alice" }, { "name": "Bob", "children": [{ "name": "Charlie" }] }] }
let outputJSON = { "name": "John", "id" :1, "children": [{ "name": "Alice", "id" : 2 }, { "name": "Bob",  "id" : 3, "children": [{ "name": "Charlie", "id" : 4 }] }] }

2.  write a function to flat an array, with recursion 
const array =[1,[2,3],[1,[3,5,[6,7]],4]];
Expected output : [1,2,3,4,5,6,7]
 
 
3. Given an array of intervals where each interval is represented as [start, end], merge all overlapping intervals and return the result as an array of non-overlapping intervals.
intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
output = [[1, 6], [8, 10], [15, 18]]
