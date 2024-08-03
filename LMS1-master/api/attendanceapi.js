"use server"
export async function fetchAttendanceData() {
    const res = await fetch('http://localhost:5000/api/attendance/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addAttendanceData(attendanceData) {
    const res = await fetch('http://localhost:5000/api/attendance/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(attendanceData),
    });

    if (!res.ok) {
        throw new Error('Failed to add enquiry data');
    }

    return res.json();
}


export async function fetchAttendanceById(id) {
    const res = await fetch(`http://localhost:5000/api/attendance/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch enquiry data');
    }

    return res.json();
}

export async function updateAttendance(id, isPresent) {
    try {
        const response = await fetch(`http://localhost:5000/api/attendance/update/${id}`, {
            method: 'PUT', // Changed to PUT to match your router.put('/update/:id')
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ present: isPresent }),
        });

        if (!response.ok) {
            throw new Error('Failed to update attendance');
        }

        const updatedData = await response.json();
        console.log('Attendance updated:', updatedData);
    } catch (error) {
        console.error('Error:', error);
    }
}

