
export async function fetchStudentData() {
    const res = await fetch('http://localhost:5000/api/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addStudentData(studentData) {
    try {
        const res = await fetch('http://localhost:5000/api/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        });

        // Check if the server response is not OK (status code is not in the range of 200-299)
        if (!res.ok) {
            // Try to extract the error message from the response body
            const errorData = await res.json();
            // Throw an error with the message returned from the server
            throw new Error(errorData.message || 'Failed to add student data');
        }

        return res.json(); // Parse and return the JSON data if the response is OK
    } catch (error) {
        // Catch any network or server errors and rethrow with a proper message
        throw new Error(error.message || 'Something went wrong while adding student data');
    }
}




export async function fetchStudentById(studentID) {
    const res = await fetch(`http://localhost:5000/api/get/${studentID}`);

    if (!res.ok) {
        throw new Error('Failed to fetch student data');
    }

    return res.json();
}
export async function fetchStudentByID(id) {
    const res = await fetch(`http://localhost:5000/api/gets/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch student data');
    }

    return res.json();
}

export const updateStudentData = async (studentID, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/update/${studentID}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update student data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update student data: ${error.message}`);
    }
};


export async function deleteStudentData(id) {
    const url = `http://localhost:5000/api/delete/${id}`;

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


// import Student 

export async function importStudentData(file) {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:5000/api/import', {
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



//event fetch 

export async function fetcheventData() {
    const res = await fetch('http://localhost:5000/api/event/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
// Count Data for Student


export async function fetchCountData() {
    const res = await fetch('http://localhost:5000/api/count');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

//Fee api

//Add Fee

export async function addFeeData(FeeData) {
    const res = await fetch('http://localhost:5000/api/fees/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(FeeData),
    });

    if (!res.ok) {
        throw new Error('Failed to add Fee data');
    }

    return res.json();
}

//Fee Data for student 

export async function fetchFeeData() {
    const res = await fetch('http://localhost:5000/api/fees/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

//Fee for student 

export async function fetchFeeRecordById(id) {
    try {
        console.log(`Fetchinginng fee record for id: ${id}`);
        const res = await fetch(`http://localhost:5000/api/fees/get/${id}`);

        if (!res.ok) {
            throw new Error('Failed to fetch Fees data');
        }

        const data = await res.json();
        console.log(`Fee record data received: ${data}`);
        return data;
    } catch (error) {
        console.error(`Error fetching fee record: ${error.message}`);
        throw error;
    }
}

//fee Month
// api.js
export async function fetchFeeRecordByMonth(studentID, month) {
    console.log(`Fetching fee record for studentID: ${studentID} and month: ${month}`);

    try {
        const response = await fetch(`http://localhost:5000/api/fees/get/${studentID}/${month}`);
        console.log('Response status:', response.status);

        if (!response.ok) {
            throw new Error(`Error fetching fee record: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Fee record data:', data);
        return data;
    } catch (error) {
        console.error('Failed to fetch fee record:', error);
        throw error;
    }
}

export async function updateFeeRecordByMonth(studentID, month, updatedData) {
    try {
        const res = await fetch(`http://localhost:5000/api/fees/updateByMonth/${studentID}/${month}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
        });
        if (!res.ok) {
            throw new Error('Failed to update fee data');
        }
    } catch (error) {
        console.error("Error updating fee data:", error);
        throw error;
    }
}


export const sendFeeNotice = async (studentID, noticeData) => {
    try {
        const response = await fetch(`http://localhost:5000/api/fees/sendNotice/${studentID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(noticeData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.msg || 'Error sending fee notice');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'Error sending fee notice');
    }
};


// send Message
export const selectStudent = async (studentId, selected) => {
    try {
        const response = await fetch(`http://localhost:5000/api/selectStudent/${studentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ selected }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update selected status');
        }

        return response.json();
    } catch (error) {
        throw error;
    }
};

export const sendMessages = async (subject, message) => {
    try {
        const response = await fetch(`http://localhost:5000/api/sendMessages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ subject, message }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to send messages');
        }

        return response.json();
    } catch (error) {
        throw error;
    }
};


export const sendSMS = async (message) => {
    try {
        const response = await fetch(`http://localhost:5000/api/sendSMS`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to send messages');
        }

        return response.json();
    } catch (error) {
        throw error;
    }
};


