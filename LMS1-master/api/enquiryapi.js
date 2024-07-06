"use server"
export async function fetchEnquiryData() {
    const res = await fetch('http://localhost:5000/api/enquiry/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addEnquiryData(enquiryData) {
    const res = await fetch('http://localhost:5000/api/enquiry/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(enquiryData),
    });

    if (!res.ok) {
        throw new Error('Failed to add enquiry data');
    }

    return res.json();
}


export async function fetchEnquiryById(id) {
    const res = await fetch(`http://localhost:5000/api/enquiry/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch enquiry data');
    }

    return res.json();
}

export const updateEnquiryData = async (id, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/enquiry/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update enquiry data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update enquiry data: ${error.message}`);
    }
};


export async function deleteEnquiryData(id) {
    const url = `http://localhost:5000/api/enquiry/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete enquiry data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting enquiry data: ${error.message}`);
    }
}