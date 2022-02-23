import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import React from 'react';
import Table from './Components/Table';

function App() {
  const [data, setData] = React.useState([]);
  const [req, setReq] = React.useState(false);

  React.useEffect( () => {
    fetch("http://localhost:3000/emp")
    .then((res) => res.json() )
    .then( res => setData(res) )
    .catch( err => console.log(err) )
  }, [])

  const onAdd = (item) => {
    const config = {
      method: "POST",
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(item)
    }

    fetch("http://localhost:3000/emp", config);
    setData( [...data, item]);
  }

  const filterBy = (required) => {
    setReq(required);
  }

  const deleteEmp = (id) => {
    fetch(`http://localhost:3000/emp/${id}`, {
      method: 'DELETE',
      headers: {
          'Content-type': 'application/json'
      } 
    })
    setData( data.filter( item => item.id !== id ) )
  }

  return (
    <div className="App">
      <Form onAdd={onAdd} />
      <Table data={req ? data.filter( (item) => item.dep === req ) : data} filterBy={filterBy} deleteEmp={deleteEmp}/>  
    </div>
  );
}

export default App;
