import axios, { AxiosResponse } from 'axios';

const apiKey = import.meta.env.VITE_API_KEY; 
const appId = import.meta.env.APP_ID
const apiEndpoint = import.meta.env.VITE_DATA_URL

const menuItems = axios.get(apiEndpoint, {
    headers: {
        Accept: 'application/json',
        'Accept-Language': 'en',
    },
    params: {
        app_id: appId,
        app_key: apiKey,
    },
})

    .then((response: AxiosResponse) => {
        return response.data;
    })
    .catch((error) => {
        console.error('Error:', error);
    });

export const getMenuItems = async (num: number = 10) => {
    const res = [];
    const items = await menuItems;
    if(!items) throw new Error("There is a problem accessing menu items")
    for (let i = 0; i < num && i < items.hits.length; i++) {
        const item = items.hits[i].recipe;
        const set = {
            images: item.images,
            ingredients: item.ingredients,
            totalDaily: item.totalDaily,
            totalNutrients: item.totalNutrients,
        };
        res.push(set);
    }
    return res;
};
