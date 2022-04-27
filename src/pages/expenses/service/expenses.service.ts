import httpClient from '../../../axios/axios-client';

const client = new httpClient();

export const createExpense = async (values: any) => {
    return await client.request('post','expenses');
}