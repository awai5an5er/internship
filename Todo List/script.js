let taskContainer = document.querySelector('.tasks');
const toDoList = {
    monday: ["Training", "Movies",'Gaming'],
    tuesday:["Shopping","Football"],
    wednesday:[],
    thursday:[],
    friday:[],
    saturday:[],
    sunday:[],
}
const addition = function(day,task) {
    toDoList[day].push(task);
    for (const key in toDoList){
        const tempArr = toDoList[key];
        const arr = tempArr.map((val)=>{
            return `<p>${val}</p>`;
        })
        document.querySelector(`.${key}`).innerHTML = arr.join(" ");
    }
}
const remove = function(day,task){
    toDoList[day].pop(task);
    console.log(toDoList[day]);
}   

document.querySelector(".btn1").addEventListener("click",function(){
    let day = document.querySelector(".inp1").value;
    let task = document.querySelector(".inp2").value;
    addition(day,task);

})
document.querySelector(".btn2").addEventListener("click",function(){
    let day = document.querySelector(".inp1").value;
    let task = document.querySelector(".inp2").value;
    remove(day,task);

})

