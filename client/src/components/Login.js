import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or API call to verify username and password
    // For simplicity, we'll use hardcoded values here
    if (username === 'admin' && password === 'password') {
      handleLogin(username);
    } 
    else if (username === 'client' && password === 'client') {
        handleLogin(username);
    }
    
    else {
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

const Logout = ({ handleLogout, username }) => {
  return (
    <div>
      <p>Welcome, {username}!</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div>
      <h1>React Login/Logout Example</h1>
      {isLoggedIn ? (
        <Logout handleLogout={handleLogout} username={username} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
