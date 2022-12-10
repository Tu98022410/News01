import { useState } from 'react'
import { API } from '../API'
import { Header } from './header';

export const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });
  const [res, setRes] = useState('');

  const login = async () => {
    const { data } = await API.post('/login', userInfo);
  console.log(data)

    if(data.message) {
      setRes(data.message);
    } else {
      setRes('logged in')
      localStorage.setItem("token", data.token)
    }
  }

  return (
    <div style={{marginTop:"100px"}}>
      <Header></Header>
      <h1>Login</h1>

      <input placeholder='email' value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
      <input placeholder='pass' type="password" value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />

      <button onClick={login} >Login</button>

      <div>{res}</div>
    </div>
  )
}