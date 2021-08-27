import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import NavBar from './components/nav';
import Layout from './components/Layout';
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavBar page='home'/>
        <Layout>
              Hello world
        </Layout>
      </div>
    </ChakraProvider>
  );
}
 
export default App;
