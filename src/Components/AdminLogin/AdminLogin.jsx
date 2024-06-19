import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AdminLogin.scss'

const AdminLogin = () => {
    const navigate=useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://shajahan.firstlogicinfolab.com/login', { username, password });
          const ResData = response.data;
          localStorage.setItem('Loggedin', ResData);
          console.log('Login successful!');
          navigate('/adminPannel');
        } catch (error) {
          console.error('Error during login:', error);
        }
      };
  return (
    <div className='admin-login-main'>
      <div className="login-card">
        <h3 style={{color:"white"}}>Login</h3>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setUsername(e.target.value)} name="firstname" placeholder="username.." />
            <input type="password" name="lastname" placeholder="password.." onChange={(e) => setPassword(e.target.value)}  />
            <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
