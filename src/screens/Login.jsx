import '../css/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const handlesubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:5000/api/login', {

      username: e.target[0].value,
      password: e.target[1].value
    }).then((res) => {
      console.log(res);
      // save the token in local storage
      localStorage.setItem('token', res.data.token);
      window.sessionStorage.setItem("username", e.target[0].value);
      window.location.href = '/home';
    }).catch((err) => {
      alert(err.response.data);
    }
    );
  }

  return (
    <div>
      <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form" onSubmit={handlesubmit}>
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <p class="message">Not registered? <Link to='/register'>Create an account</Link></p>
        </form>
      </div>
    </div>
    </div>
  )
}   


export default Login;