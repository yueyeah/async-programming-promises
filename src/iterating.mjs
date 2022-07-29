import setText , {appendText} from './results.mjs';

export async function get(){
    const {data} = await axios.get("http://localhost:3000/orders/1");
    setText(JSON.stringify(data));
}

export async function getCatch(){
    try { // async-await can make use of normal try-catch for errors
        const {data} = await axios.get("http://localhost:3000/orders/1123");
        setText(JSON.stringify(data));
    } catch (error) {
        setText(error);
    }
    
}

/*
This is same as the chain function in consuming.mjs.
*/
export async function chain(){
    const { data } = await axios.get("http://localhost:3000/orders/1");
    const { data: address } = await axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
    setText(`City: ${JSON.stringify(address.city)}`);
}

export async function concurrent(){
    // by not using await for both get(), allow both to query endpoint concurrently
    const orderStatus = axios.get("http://localhost:3000/orderStatuses");
    const orders = axios.get("http://localhost:3000/orders");
    setText("");
    // for concurrent, await the variable instead of awaiting a function
    // this will wait for the slower request
    const { data: statuses } = await orderStatus;
    const { data: order } = await orders;

    appendText(JSON.stringify(statuses));
    appendText(JSON.stringify(order[0]));
}

/*
Click "Parallel" button on the webpage
Scroll down in time to see them arrive in the order of completion
If they complete at different speeds, they will appear at different times
*/
export async function parallel(){
    setText("");
    // await all() will wait for all promises to resolve or 1 reject before continuing
    await Promise.all([
        (async () => { // anonymous async function to return first promise of orderStatuses
            const { data } = await axios.get("http://localhost:3000/orderStatuses");
            appendText(JSON.stringify(data));
        }) (),
        (async () => { // anonymous async function to return first promise of orders
            const { data } = await axios.get("http://localhost:3000/orders");
            appendText(JSON.stringify(data));
        }) ()
    ]);
}