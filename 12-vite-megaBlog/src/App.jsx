import config from "./config/config";

function App() {
  console.log(config.appwriteUrl);
  return (
    <div>A blog app</div>
  )
}

export default App