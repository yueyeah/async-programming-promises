import setText, {appendText, showWaiting, hideWaiting} from "./results.mjs";

export function get() {
    axios.get("http://localhost:3000/orders/1") // axios is referenced in consuming.html. This is a HTTP GET request
    .then(({data}) => {
        setText(JSON.stringify(data));
    });  
}

export function getCatch() {
    axios.get("http://localhost:3000/orders/123") // order 123 is a non-existent order
    .then(({data}) => {
        setText(JSON.stringify(data));
    }).catch(err => setText(err));   
}

/* Uncomment this to see 2 errors: 404 for getting order 123 and rejection for promise
export function getCatch() {
    axios.get("http://localhost:3000/orders/123") // order 123 is a non-existent order
    .then((result) => {
        if (result.status === 200) {
            setText(JSON.stringify(result.data));
        } else {
            setText("Error");
        }
    });  
}
*/

export function chain() {
}

export function chainCatch() {
}

export function final() {
}