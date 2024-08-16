export const fetchData = async (url, onSuccess, onError) => {
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (response.ok) {
            const data = await response.json();
            onSuccess(data);
        } else {
            console.log('API call failed with status:', response.status);
            if (onError) onError(response.status);
        }
    } catch (error) {
        console.log('Error during API call:', error);
        if (onError) onError(error);
    }
};
