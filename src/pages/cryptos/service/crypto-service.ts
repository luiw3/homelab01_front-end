import httpClient from '../../../axios/axios-client';

const client = new httpClient();

export const createCrypto = (values: any) => {
    return client.request('post','cryptos');
}