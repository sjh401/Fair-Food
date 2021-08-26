import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Container from './containers/Container';
import Login from './screens/user/Login';
import Register from './screens/user/Register';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [ currentUser, setCurrentUser ] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  },[])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }


  return (
    <div className="App">
        <Layout
          currentUser={currentUser}
          handleLogout={handleLogout}
        >
          <Switch>
            <Route path="/login">
              <Login 
                handleLogin={handleLogin}
              />
            </Route>
            <Route path="/register">
              <Register 
                handleRegister={handleRegister}
              />
            </Route>
            <Route path="/">
              <Container />
            </Route>
          </Switch>
        </Layout>
    </div>
  );
}

export default App;
