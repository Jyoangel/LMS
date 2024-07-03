export async function fetchExamData() {
    const res = await fetch('http://localhost:5000/api/exam/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addSExamData(examData) {
    const res = await fetch('http://localhost:5000/api/exam/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(examData),
    });

    if (!res.ok) {
        throw new Error('Failed to add exam data');
    }

    return res.json();
}


export async function fetchExamById(id) {
    const res = await fetch(`http://localhost:5000/api/exam/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch assignment data');
    }

    return res.json();
}

export const updateExamData = async (id, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/exam/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update exam data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update exam data: ${error.message}`);
    }
};


export async function deleteExamData(id) {
    const url = `http://localhost:5000/api/exam/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete exam data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting exam data: ${error.message}`);
    }
}