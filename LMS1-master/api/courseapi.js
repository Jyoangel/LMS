export async function fetchCourseData() {
    const res = await fetch('http://localhost:5000/api/course/get');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function addCourseData(courseData) {
    const res = await fetch('http://localhost:5000/api/course/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
    });

    if (!res.ok) {
        const errorData = await res.json();
        console.error('Error response from server:', errorData);
        throw new Error('Failed to add course data');
    }

    return res.json();
}

export async function deleteCourseData(id) {
    const url = `http://localhost:5000/api/course/delete/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete course data');
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error deleting course data: ${error.message}`);
    }
}

export async function updateCourseData(id, courseData) {
    console.log('Request body:', courseData); // Add this log
    try {
        const res = await fetch(`http://localhost:5000/api/course/update/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(courseData)
        });
        console.log(`Response status: ${res.status}`);
        console.log(`Response ok: ${res.ok}`);
        if (!res.ok) {
            throw new Error('Failed to update Course data');
        }
        return res.json();
    } catch (error) {
        console.error(`Error updating course data: ${error}`);
        throw error;
    }
}

export async function fetchCourseById(id) {
    const res = await fetch(`http://localhost:5000/api/course/get/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch course data');
    }

    return res.json();
}


export const importCourses = async (file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:5000/api/course/import', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to import courses');
        }

        const responseData = await response.json();
        console.log(responseData.message); // Log success message
        return responseData; // Optionally return any data from the response
    } catch (error) {
        console.error('Error importing courses:', error.message);
        throw error; // Propagate the error
    }
};
