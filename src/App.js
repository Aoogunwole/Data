import { useEffect, useState } from 'react';
import './index.css';
import Form from './Forms'
import List from './List';
import Table from "./Table";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [request, setRequest] = useState('users');
  const[items, setItems] = useState([])

  useEffect(() => {

    const fetchItems = async () => {
      try{
        const response = await fetch(`${API_URL}${request}`);
        const result = await response.json();
        setItems(result);
      } catch(err) {
        console.log(err)
      }
    }
    fetchItems();
  }, [request])

  return (
    <div className="App">
      <Form 
        request = {request}
        setRequest = {setRequest}
      />

      {/* <List 
        items = {items}
      /> */}
      <Table
        items = {items}
      />

    </div>
  );
}

export default App;
