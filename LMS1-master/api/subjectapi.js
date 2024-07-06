

"use server"
export async function fetchSubjectData() {
    const res = await fetch('http://localhost:5000/api/subject/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addSubjectData(subjectData) {
    const res = await fetch('http://localhost:5000/api/subject/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subjectData),
    });

    if (!res.ok) {
        throw new Error('Failed to add subject data');
    }

    return res.json();
}


export async function fetchSubjectById(id) {
    const res = await fetch(`http://localhost:5000/api/subject/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch subject data');
    }

    return res.json();
}

export const updateSubjectData = async (id, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/subject/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update subject data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update subject data: ${error.message}`);
    }
};


export async function deleteSubjectData(id) {
    const url = `http://localhost:5000/api/subject/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete subject data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting subject data: ${error.message}`);
    }
}