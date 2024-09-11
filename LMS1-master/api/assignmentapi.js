export async function fetchAssignmentData() {
    const res = await fetch('http://localhost:5000/api/assignment/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addAssignmentData(formData) {
    const res = await fetch('http://localhost:5000/api/assignment/add', {
        method: 'POST',
        body: formData, // Use FormData object here
    });

    if (!res.ok) {
        throw new Error('Failed to add Library data');
    }

    return res.json();
}

export async function fetchAssignmentById(id) {
    const res = await fetch(`http://localhost:5000/api/assignment/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch assignment data');
    }

    return res.json();
}

export const updateAssignmentData = async (id, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/assignment/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update assignment data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update assignment data: ${error.message}`);
    }
};


export async function deleteAssignmentData(id) {
    const url = `http://localhost:5000/api/assignment/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete assignment data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting assignment data: ${error.message}`);
    }
}


