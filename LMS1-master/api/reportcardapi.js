export async function fetchReportCardData() {
    const res = await fetch('http://localhost:5000/api/reportcard/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addReportCardData(reportcardData) {
    const res = await fetch('http://localhost:5000/api/reportcard/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reportcardData),
    });

    if (!res.ok) {
        throw new Error('Failed to add report data');
    }

    return res.json();
}

export async function fetchReportCardById(id) {
    const res = await fetch(`http://localhost:5000/api/reportcard/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch admitCard data');
    }

    return res.json();
}

export const updateReportCardData = async (id, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/reportcard/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update exam data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update exam data: ${error.message}`);
    }
};


export async function deleteReportCardData(id) {
    const url = `http://localhost:5000/api/reportcard/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete admitcard data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting admitcard data: ${error.message}`);
    }
}


//Admit Card
export async function fetchAdmitCardData() {
    const res = await fetch('http://localhost:5000/api/admitcard/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addAdmitCardData(admitcardData) {
    console.log('Sending Admit Card Data:', admitcardData);

    const res = await fetch('http://localhost:5000/api/admitcard/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(admitcardData),
    });

    const data = await res.json();

    if (!res.ok) {
        console.log('Response Status:', res.status);
        console.log('Response Data:', data);
        throw new Error('Failed to add admitcard data');
    }

    return data;
}


export async function fetchAdmitCardById(id) {
    const res = await fetch(`http://localhost:5000/api/admitcard/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch admitCard data');
    }

    return res.json();
}

export const updateAdmitCardData = async (id, formData) => {
    try {
        // Perform update request with student ID and formData
        const response = await fetch(`http://localhost:5000/api/admitcard/update/${id}`, {
            method: 'PUT', // Assuming you use PUT method for updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to update exam data');
        }
        return await response.json(); // Assuming the response is JSON data
    } catch (error) {
        throw new Error(`Failed to update exam data: ${error.message}`);
    }
};


export async function deleteAdmitCardData(id) {
    const url = `http://localhost:5000/api/admitcard/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete admit card data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting admit card data: ${error.message}`);
    }
}

