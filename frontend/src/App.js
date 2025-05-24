import { useEffect, useState } from 'react';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch(`${backendUrl}/api/hello`)
      .then(res => res.json())
      .then(data => setBackendMessage(data.message))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h1>React + Node.js Fullstack App</h1>
      <p>Backend says: {backendMessage}</p>
    </div>
  );
}

export default App;
