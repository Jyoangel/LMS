export async function fetchStaffData() {
    const res = await fetch('http://localhost:5000/api/staff/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

//delete staff
export async function addStaffData(staffData) {
    try {
        const res = await fetch('http://localhost:5000/api/staff/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(staffData),
        });

        // Check if the server response is not OK (status code is not in the range of 200-299)
        if (!res.ok) {
            // Try to extract the error message from the response body
            const errorData = await res.json();
            // Throw an error with the message returned from the server
            throw new Error(errorData.message || 'Failed to add staff data');
        }

        return res.json(); // Parse and return the JSON data if the response is OK
    } catch (error) {
        // Catch any network or server errors and rethrow with a proper message
        throw new Error(error.message || 'Something went wrong while adding staff data');
    }
}




export async function fetchStaffById(id) {
    const res = await fetch(`http://localhost:5000/api/staff/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch Staff data');
    }

    return res.json();
}

export const updateStaffData = async (id, formData) => {
    try {
        // Perform update request with Staff ID and formData
        const response = await fetch(`http://localhost:5000/api/staff/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update Staff data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update Staff data: ${error.message}`);
    }
};

export async function deleteStaffData(id) {
    const url = `http://localhost:5000/api/staff/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete student data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting student data: ${error.message}`);
    }
}

export async function fetchCountStaffData() {
    const res = await fetch('http://localhost:5000/api/staff/staff-count');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

//Payment 
export async function fetchPaymentStaffData() {
    const res = await fetch('http://localhost:5000/api/StaffPayment/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addPaymentData(staffPaymentData) {
    console.log('Sending payment data:', staffPaymentData); // Log data being sent
    const res = await fetch('http://localhost:5000/api/StaffPayment/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(staffPaymentData),
    });

    if (!res.ok) {
        const errorText = await res.text();
        console.error('Error response from server:', errorText); // Log server response
        throw new Error('Failed to add staff data');
    }

    return res.json();
}

export async function importStaffData(file) {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:5000/api/staff/import', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Success:', result);
        return result;
    } catch (error) {
        console.error('Error importing student data:', error);
        throw error;
    }
}