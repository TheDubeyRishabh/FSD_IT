//let num=[1,2,3,4,45,5,45];
//let newnum=num.map(x=>x*2);
//console.log(newnum);
//let evennumber=num.filter(x=>x%2==0);
//console.log(evennumber);
//let sum=num.reduce((x,y)=>x+y,0);
//console.log(sum);
//let product=num.reduce((x,y)=>x*y,1);
//console.log(product);
// const students=[
//     {name:"Alice",score:50},
//     {name:"Bob",score:65},
//     {name:"Charlie",score:80},
//     {name:"David",score:45},
//     {name:"Rahul",score:50},
// ];
// let score=students.map(x=>x.score).reduce((x,y)=>x+y,0);
// console.log(score);
// let scores=students.filter(x=>x.score>60).reduce((x,y)=>x+y.score,0);
// console.log(scores);
//let num=[12,3,3,4,4,4,4,10];
console.log("start");
setTimeout(()=>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log(" second task completed");
        setTimeout(()=>{
            console.log("third task completed");
        },3000);

    },2000);

},1000);
console.log("End");