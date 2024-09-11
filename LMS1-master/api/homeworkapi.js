export async function fetchHomeWorkData() {
    const res = await fetch('http://localhost:5000/api/homework/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addHomeworkData(formData) {
    const res = await fetch('http://localhost:5000/api/homework/add', {
        method: 'POST',
        body: formData, // Use FormData object here
    });

    if (!res.ok) {
        throw new Error('Failed to add Library data');
    }

    return res.json();
}

export async function fetchHomeWorkById(id) {
    const res = await fetch(`http://localhost:5000/api/homework/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch assignment data');
    }

    return res.json();
}

export const updateHomeWorkData = async (id, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/homework/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update homework data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update homework data: ${error.message}`);
    }
};


export async function deleteHomeWorkData(id) {
    const url = `http://localhost:5000/api/homework/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete homework data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting homework data: ${error.message}`);
    }
}
