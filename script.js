console.log('person 1:shows ticket');
console.log('person 2:shows ticket');
const premovie = async()=>{
    const promiseWifeBringingTicks= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket');
        }, 0);
    });
    const getpopcorn =new Promise((resolve, reject) => resolve(`popcorn`));
    const getbutter =new Promise((resolve, reject) => resolve(`butter`));
    const getcoldrink =new Promise((resolve, reject) => resolve(`coldrink`))
    let ticket = await promiseWifeBringingTicks;
    console.log('wife: i have ticket');
    console.log('husband: we should go in');
    console.log('wife:no i am hungry');

    let popcorn = await getpopcorn;
    console.log('husband: i have popcorn');
    console.log('husband: we should go in');
    console.log('wife:no i need butter');

    let butter= await getbutter;
    console.log('husband: i have butter');
    console.log('husband: we should go in');
    console.log('wife:no i need coldrinks');

    let coldrinks= await getcoldrink;
    console.log('husband: i have coldrinks');
    console.log('wife:Yes lets go');

    return ticket;
    
}
premovie().then((m)=> console.log(`person 3: shows${m}`));
console.log('person 4:shows ticket');
console.log('person 5:shows ticket');