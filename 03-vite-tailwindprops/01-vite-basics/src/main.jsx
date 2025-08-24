import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';

function MyApp() {
  return (
    <h2> CUSTOM FUNCTION </h2>
  );
}

/*
const reactElement = {
    type: 'a',
    props: {
        href: 'https://reactjs.org',
        target: '_blank',
    },
    children: 'Link to React'
};

Why This Code isn't working :
Because the `createRoot` function expects a React element, not a plain object 
and React elements are created using JSX or React.createElement.
They have a specific structure that React understands,
whereas the `reactElement` object is just a plain JavaScript object with our configuration.
*/

const AnotherElement = (
  <a href='https://vitejs.dev' target='_blank'>
    Link to Vite
  </a>
);

const AnotherUser = "Yuvraj Singh";

const reactElement = React.createElement(
  'a',
  { href: 'https://reactjs.org', target: '_blank' },
  'Link to React',
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>
      
      <App />
      <MyApp />
      {AnotherElement}
      {reactElement}

      <footer style={{
        marginTop: 'auto',
        paddingTop: '24px',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#555',
        borderTop: '1px solid #ddd',
        width: '100%',
        textAlign: 'center'
      }}>
        AnotherUser: {AnotherUser}
      </footer>
    </div>
  </StrictMode>
);
