"use server"
export async function fetchLiveClassData() {
    const res = await fetch('http://localhost:5000/api/liveclass/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addLiveClassData(liveclassData) {
    const res = await fetch('http://localhost:5000/api/liveclass/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(liveclassData),
    });

    if (!res.ok) {
        throw new Error('Failed to add liveclass data');
    }

    return res.json();
}


export async function fetchLiveClassById(id) {
    const res = await fetch(`http://localhost:5000/api/liveclass/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch liveclass data');
    }

    return res.json();
}

export const updateLiveClassData = async (id, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/liveclass/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update liveclass data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update liveclass data: ${error.message}`);
    }
};


export async function deleteLiveClassData(id) {
    const url = `http://localhost:5000/api/liveclass/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete liveclass data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting liveclass data: ${error.message}`);
    }
}