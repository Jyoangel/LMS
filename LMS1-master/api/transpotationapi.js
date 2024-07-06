
export async function fetchTranspotationData() {
    const res = await fetch('http://localhost:5000/api/transpotation/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addTranspotationData(transpotationData) {
    const res = await fetch('http://localhost:5000/api/transpotation/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(transpotationData),
    });

    if (!res.ok) {
        throw new Error('Failed to add transpotation data');
    }

    return res.json();
}


export async function fetchTranspotationById(id) {
    const res = await fetch(`http://localhost:5000/api/transpotation/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch transpotation data');
    }

    return res.json();
}

export const updateTranspotationData = async (id, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/transpotation/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update transpotation data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update transpotation data: ${error.message}`);
    }
};


export async function deleteTranspotationData(id) {
    const url = `http://localhost:5000/api/transpotation/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete transpotation data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting transpotation data: ${error.message}`);
    }
}