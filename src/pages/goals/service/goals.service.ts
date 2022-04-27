import httpClient from '../../../axios/axios-client';

const client = new httpClient();

export const createGoal = async (values: any) => {
    return await client.request('post','goals');
}