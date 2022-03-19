const baseUrl = process.env.REACT_APP_API_URL;

const fetchWithoutToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

const fetchWithToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';
    //console.log(token);
    //console.log(data);
    //console.log(method);


    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'Authorization':  token,
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'Authorization':  token,
            },
            body: JSON.stringify( data )
        });
    }
}



export {
    fetchWithoutToken,
    fetchWithToken
}