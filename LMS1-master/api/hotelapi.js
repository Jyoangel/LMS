"use server"
export async function fetchHotelData() {
    const res = await fetch('http://localhost:5000/api/hotel/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addHotelData(hotelData) {
    const res = await fetch('http://localhost:5000/api/hotel/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelData),
    });

    if (!res.ok) {
        throw new Error('Failed to add hotel data');
    }

    return res.json();
}


export async function fetchHotelById(id) {
    const res = await fetch(`http://localhost:5000/api/hotel/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch hotel data');
    }

    return res.json();
}

export const updateHotelData = async (id, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/hotel/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update hotel data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update hotel data: ${error.message}`);
    }
};


export async function deleteHotelData(id) {
    const url = `http://localhost:5000/api/hotel/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete hotel data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting hotel data: ${error.message}`);
    }
}