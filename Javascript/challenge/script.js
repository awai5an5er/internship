let arr= [];
let str = "";
let i = 0;
const dup = function(string){
    for(i=0;i<string.length;i++){
        console.log(string[i],i,string.length);
        if(i===0){
            str = str + string[i];
        }
        else if(str.includes(string[i])){
            arr.push(str);
            str = "";
        }else if(i===string.length-1){
            str = str + string[i];
            arr.push(str);
            str = "";
        }
        else{
            str = str + string[i];
        }
        // console.log(str);
    };
    
    const arr1=[...arr[0]];
    const arr2=[...arr[1]];
    const l1 = arr1.length;
    const l2 = arr2.length;
    if(arr1.length>arr2.length)console.log(l1)
    else console.log(l2)
    
}
console.log(dup("pwwkew"));

