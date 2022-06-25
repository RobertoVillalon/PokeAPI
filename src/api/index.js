export default async function apiCall({
    url,
    method = 'GET',
    body,
    headers,
}){
    try{
        const response = await fetch(url , {method, body, headers});

        return response.json();
    }catch(e){Promise.reject(e);}
}