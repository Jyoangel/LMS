export async function fetchTeacherData() {
    const res = await fetch('http://localhost:5000/api/teacher/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
export async function addTeacherData(teacherData) {
    try {
        const res = await fetch('http://localhost:5000/api/teacher/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(teacherData),
        });

        // Check if the server response is not OK (status code is not in the range of 200-299)
        if (!res.ok) {
            // Try to extract the error message from the response body
            const errorData = await res.json();
            // Throw an error with the message returned from the server
            throw new Error(errorData.message || 'Failed to add teacher data');
        }

        return res.json(); // Parse and return the JSON data if the response is OK
    } catch (error) {
        // Catch any network or server errors and rethrow with a proper message
        throw new Error(error.message || 'Something went wrong while adding teacher data');
    }
}




export async function fetchTeacherById(id) {
    const res = await fetch(`http://localhost:5000/api/teacher/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch Teacher data');
    }

    return res.json();
}

export const updateTeacherData = async (id, formData) => {
    try {
        // Perform update request with Teacher ID and formData
        const response = await fetch(`http://localhost:5000/api/teacher/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update Teacher data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update Teacher data: ${error.message}`);
    }
};

//delete teacher

export async function deleteTeacherData(id) {
    const url = `http://localhost:5000/api/teacher/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete Teacher data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting Teacher data: ${error.message}`);
    }
}

export async function fetchCountTeacherData() {
    const res = await fetch('http://localhost:5000/api/teacher/count');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

//paymentTeacher 

export async function fetchPaymentTeacherData() {
    const res = await fetch('http://localhost:5000/api/paymentTeacher/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

//add Payment
export async function addPaymentData(teacherPaymentData) {
    console.log('Sending payment data:', teacherPaymentData); // Log data being sent
    const res = await fetch('http://localhost:5000/api/paymentTeacher/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(teacherPaymentData),
    });

    if (!res.ok) {
        const errorText = await res.text();
        console.error('Error response from server:', errorText); // Log server response
        throw new Error('Failed to add Teacher data');
    }

    return res.json();
}


export async function importTeacherData(file) {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:5000/api/teacher/import', {
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