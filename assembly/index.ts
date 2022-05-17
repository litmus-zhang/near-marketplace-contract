import { PersistentUnorderedMap } from 'near-sdk-as'


export const products = new PersistentUnorderedMap<string, string>('PRODUCTS');



//Write Function to the contract
export function setProduct(id: string, productName: string): void
{
    products.set(id, productName);
}


//Get Product Id from the contract
export function getProduct(id: string): string | null
{
    return products.get(id);
}