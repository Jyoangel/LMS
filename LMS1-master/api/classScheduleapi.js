
export async function fetchClassScheduleData() {
    const res = await fetch('http://localhost:5000/api/classSchedule/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addClassScheduleData(classScheduleData) {
    const res = await fetch('http://localhost:5000/api/classSchedule/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(classScheduleData),
    });

    if (!res.ok) {
        throw new Error('Failed to add classSchedule data');
    }

    return res.json();
}


export async function fetchClassScheduleById(id) {
    const res = await fetch(`http://localhost:5000/api/classSchedule/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch classSchedule data');
    }

    return res.json();
}

export const updateClassScheduleData = async (id, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/classSchedule/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update classSchedule data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update classSchedule data: ${error.message}`);
    }
};


export async function deleteClassScheduleData(id) {
    const url = `http://localhost:5000/api/classSchedule/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete classSchedule data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting classSchedule data: ${error.message}`);
    }
}