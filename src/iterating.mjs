import setText , {appendText} from './results.mjs';

export async function get(){
    const {data} = await axios.get("http://localhost:3000/orders/1");
    setText(JSON.stringify(data));
}

export function getCatch(){
}

export function chain(){
}

export function concurrent(){
}

export function parallel(){
}