export async function fetchTeacherData() {
    const res = await fetch('http://localhost:5000/api/teacher/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

//delete teacher

export async function deleteTeacherData(id) {
    const url = `http://localhost:5000/api/teacher/delete/${id}`;

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