const arr = [22, 65, 1, 39]; 


arr.sort((a,b)=>{
    return b-a;
});

let max=arr[0];

console.log(max);