import httpClient from '../../../axios/axios-client';
import { CreateCrypto } from '../interfaces/create-crypto.interface';

const client = new httpClient();

export const createCrypto = async (values: CreateCrypto) => {
    // values.purchasingDate = new Date(values.purchasingDate);
    return await client.request('post','cryptos', values);
}