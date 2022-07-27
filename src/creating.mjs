import setText, { appendText } from "./results.mjs";

export function timeout(){
    /*
    The Promise constructor takes in 1 function as argument, called executor. 
    The executor function takes in a param called resolve, which can be called to 
    change the state of the promise to resolved state.  
    */
    const waiter = new Promise((resolve) => {
        // setTimeout only fires once
        setTimeout(() => {
            console.log("timeout has fired");
            resolve("timeout liao!");
        }, 1500);
    });

    waiter.then((text) => { // this is what happens after the promise is in fulfilled state
        setText(text);
    });
}

export function interval(){
    let counter = 0;
    const waiter = new Promise((resolve) => {
        // setInterval fires multiple times, unlike setTimeout
        setInterval(() => {
            console.log("interval is firing"); // this will keep on firing without clearInterval
            resolve(`timeout liao! ${++counter}`);
        }, 1500);
    });

    waiter.then((text) => { // this is what happens after the promise is in fulfilled state
        setText(text);
    })
    .finally(() => {
        appendText(`--finally ${counter}--`);
        /*
        Using the counter here is no use, since the promise is already in a resolved state, and thus 
        there will be no further change to the counter displayed in the browser. 
        */
    });
}

export function clearIntervalChain(){
    let counter = 0;
    let interval;
    const waiter = new Promise((resolve) => {
        // setInterval fires multiple times, unlike setTimeout
        interval = setInterval(() => {
            console.log("interval is firing"); // this will only fire when clicked
            resolve(`timeout liao! ${++counter}`);
        }, 1500);
    });

    waiter.then((text) => { // this is what happens after the promise is in fulfilled state
        setText(text);
    })
    .finally(() => {
        clearInterval(interval); // to stop the interval from constantly firing
    });
}

export function xhr(){
}

export function allPromises(){
}

export function allSettled(){
}

export function race(){
}