//Library get 
export async function fetchLibraryData() {
    const res = await fetch('http://localhost:5000/api/library/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addLibraryData(LibraryData) {
    const res = await fetch('http://localhost:5000/api/library/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(LibraryData),
    });

    if (!res.ok) {
        throw new Error('Failed to add Library data');
    }

    return res.json();
}

export async function fetchLibraryById(id) {
    const res = await fetch(`http://localhost:5000/api/library/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch Library data');
    }

    return res.json();
}

export const updateLibraryData = async (id, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/library/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update library data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update library data: ${error.message}`);
    }
};


export async function deletelibraryData(id) {
    const url = `http://localhost:5000/api/library/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete library data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting library data: ${error.message}`);
    }
}