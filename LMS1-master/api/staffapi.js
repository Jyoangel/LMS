export async function fetchStaffData() {
    const res = await fetch('http://localhost:5000/api/staff/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

//delete staff

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