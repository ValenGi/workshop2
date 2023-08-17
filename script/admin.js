const userList = document.getElementById('user-list');

async function fetchUsers() {
  try {
    const response = await axios.get('http://localhost:3000/users');
    const users = response.data;
    
    userList.innerHTML = ''; 
    users.forEach(user => {
      const userItem = document.createElement('div');
      userItem.innerHTML = `
        <p>Nombre: ${user.nombre} ${user.apellido}</p>
        <p>Correo: ${user.correo}</p>
        <button class="btn-secondary" onclick="editUser(${user.id})">Edit</button>
        <button class="btn-secondary" onclick="deleteUser(${user.id})">Delete</button>
      `;
      userList.appendChild(userItem);
    });
  } catch (error) {
    console.error(error);
  }
}

async function deleteUser(userId) {
  try {
    const response = await axios.delete(`http://localhost:3000/users/${userId}`);
    console.log(response.data); 
    fetchUsers(); 
  } catch (error) {
    console.error(error);
  }
}

fetchUsers(); 

async function editUser(userId) {
    const newNombre = prompt('Update the name:');
    const newApellido = prompt('Update the last name:');
    const newCorreo = prompt('Update the email:');
    
    if (newNombre && newApellido && newCorreo) {
      try {
        const response = await axios.put(`http://localhost:3000/users/${userId}`, {
          nombre: newNombre,
          apellido: newApellido,
          correo: newCorreo
        });
        console.log(response.data); 
        fetchUsers(); 
      } catch (error) {
        console.error(error);
      }
    }
  }