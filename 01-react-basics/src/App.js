import Header from "./Components/Header";

function App() {
  return (
    // fragments since it allows rendering of only one element
    <>
      <Header />
      <h2>My First React App</h2>
      <p>This is a simple React application.</p>
      <p>It demonstrates the basic structure of a React app.</p>
    </>
    // React.Fragment is used to group multiple elements without adding extra nodes to the DOM
  );
}

export default App;
