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
    let request = new Promise((resolve, reject) => { // executor takes reject as second param
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/users/7"); // this page doesn't exist, so shld return 404
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText); // make it resolved status
            } else {
                reject(xhr.statusText); // make it rejected status, statusText is "NOT FOUND"
            }
        }; // this means that when xhr loads, promise will 
        // enter the resolve state
        xhr.onerror = () => reject("Request failed"); // on error means for network errors, not really 
        // application error, which will also occur for onload()
        xhr.send();
    });

    request.then((response) => setText(response))
        .catch((rejectReason) => setText(rejectReason));
}

export function allPromises(){
}

export function allSettled(){
}

export function race(){
}