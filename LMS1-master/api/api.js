
export async function fetchStudentData() {
    const res = await fetch('http://localhost:5000/api/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addStudentData(studentData) {
    const res = await fetch('http://localhost:5000/api/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
    });

    if (!res.ok) {
        throw new Error('Failed to add student data');
    }

    return res.json();
}



export async function fetchStudentById(studentID) {
    const res = await fetch(`http://localhost:5000/api/get/${studentID}`);

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