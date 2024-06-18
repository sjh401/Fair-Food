import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Container from './containers/Container';
import Login from './screens/user/Login';
import Register from './screens/user/Register';
import { getUsers, loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ allUsers, setAllUsers ] = useState([]);
  const history = useHistory();

  const [ darkMode, setDarkMode ] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setAllUsers(users);
      // console.log(users);
    }
    fetchUsers();
  },[])

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
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        >
          <Switch>
            <Route path="/login">
              <Login 
                handleLogin={handleLogin}
                darkMode={darkMode}
              />
            </Route>
            <Route path="/register">
              <Register 
                handleRegister={handleRegister}
                darkMode={darkMode}
              />
            </Route>
            <Route path="/">
              <Container 
                currentUser={currentUser}
                allUsers={allUsers}
                darkMode={darkMode}
              />
            </Route>
          </Switch>
        </Layout>
    </div>
  );
}

export default App;
