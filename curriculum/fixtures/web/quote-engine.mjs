export function calculateQuote(quantity,price){
 if(String(quantity).trim()===''||String(price).trim()==='')throw new Error('Quantity and price are required.');
 const q=Number(quantity),p=Number(price);
 if(!Number.isFinite(q)||!Number.isFinite(p)||q<0||p<0)throw new Error('Use finite, non-negative numbers.');
 const total=q*p;if(!Number.isFinite(total))throw new Error('Result is too large.');return total;
}
