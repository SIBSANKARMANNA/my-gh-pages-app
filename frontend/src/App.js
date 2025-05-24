import { useEffect, useState } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
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
