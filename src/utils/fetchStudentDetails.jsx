import axios from 'axios';

const fetchStudentDetails = async (studentId, token) => {
  try {
    const response = await axios.get('http://localhost:3000/studentsRoutes/studentdetails', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: { id: studentId } // Using query parameters instead of body
    });

    // Ensure response.data is handled as an array
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching student details: ${error.message}`);
  }
};
export default fetchStudentDetails