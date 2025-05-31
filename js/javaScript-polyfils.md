#### 1. Write polyfil for .includes().
```
Array.prototype.myIncludes = function(callback){
    for(let i =0; i< this.length; i++){
        if(this[i] === callback){
            return true;
        }
    }
    return false;
}

```

```
console.log([1,2,3,4].myIncludes(1)) => true
console.log(['Ditu','Ram','Krishna','Jagannath'].myIncludes('Jagannath1')) => false
```
#### 3. Write polyfil for .forEach().

```
Array.prototype.myForEach = function(callback){
    for(let i =0; i< this.length; i++){
     callback(this[i],i,this)
    }
}
```
```
let arr = [1,2,3,4]
arr.myForEach((item,index, arr)=> console.log(item))
```

#### 4. Write polyfil for .map().

```
Array.prototype.myMap = function(callback){
    const result = [];
    for(let i =0; i< this.length; i++){
     result.push(callback(this[i],i,this))
    }
}
```
```
let arr = [1,2,3,4]
arr.myMap((item)=> console.log(item*2))
```
#### 5. Write polyfil for .filter().

```
Array.prototype.myFilter = function(callback){
    const result = [];
    for(let i =0; i< this.length; i++){
     if(callback(this[i],i,this)){
         result.push(this[i])
     }
    }
    return result;
}
```
```
let arr = [1,2,3,4]
console.log(arr.myFilter((item)=> item >1))
```

#### 6. Write polyfil for .find().

```
Array.prototype.myFind = function(callback){
    for(let i =0; i< this.length; i++){
     if(callback(this[i],i,this)){
         return this[i];
     }
    }
    return undefined;
}
```
```
let arr = [1,2,3,4]
console.log(arr.myFind((item)=> item >2)) // 3
```
