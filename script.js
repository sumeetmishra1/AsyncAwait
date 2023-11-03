console.log('person 1:shows ticket');
console.log('person 2:shows ticket');
const promiseWifeBringticks=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('ticket');
    },2000)
})
const getpopcorn=promiseWifeBringticks.then((t)=>{
    console.log('wife: i have ticket');
    console.log('husband: we should go in');
    console.log('wife:no i am hungry');
    return new Promise((resolve, reject) => {
        resolve(`${t} popcorn`)
    })
}
)
const getbutter = getpopcorn.then((t)=>{
    console.log('husband: i have popcorn');
    console.log('husband: we should go in');
    console.log('wife:no i need butter');
    return new Promise((resolve, reject) => {
        resolve(`${t} butter`);
    })
})
const getColddrinks=getbutter.then((t)=>{
    console.log('husband: i have butter');
    console.log('husband: we should go in');
    console.log('wife:no i need coldrinks');
    return new Promise((resolve, reject) => {
        resolve(`${t} coldrink`);
    })
})
getColddrinks.then(t=>{
    console.log(t);
})
console.log('person 4:shows ticket');
console.log('person 5:shows ticket');