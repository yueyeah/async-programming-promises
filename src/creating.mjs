import setText, { appendText } from "./results.mjs";

export function timeout(){
    /*
    The Promise constructor takes in 1 function as argument, called executor. 
    The executor function takes in a param called resolve, which can be called to 
    change the state of the promise to resolved state.  
    */
    const waiter = new Promise((resolve) => {
        setTimeout(() => {
            resolve("timeout liao!");
        }, 1500);
    });

    waiter.then((text) => { // this is what happens after the promise is in fulfilled state
        setText(text);
    })
}

export function interval(){
}

export function clearIntervalChain(){
}

export function xhr(){
}

export function allPromises(){
}

export function allSettled(){
}

export function race(){
}