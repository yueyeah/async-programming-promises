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

export function concurrent(){
}

export function parallel(){
}