document.getElementById('user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
  
    try {
      const response = await axios.post('http://localhost:3000/users', { nombre, apellido, correo, contrasena });
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  });