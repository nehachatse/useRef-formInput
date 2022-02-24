import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import React from 'react';
import Table from './Components/Table';
import Pagination from './Components/Pagination';

function App() {
  const [data, setData] = React.useState([]);
  const [update, setUpdate] = React.useState(false);
  const [req, setReq] = React.useState(false);
  const [totalPages, setTotalPages] = React.useState(0);
  const [pages, setPages] = React.useState(1);

  React.useEffect( () => {
    fetch(`http://localhost:3000/emp`)
    .then((res) => res.json() )
    .then( res => {
      setTotalPages( Math.ceil(res.length / 5 ) );
    })
    .catch( err => console.log(err) )
  }, [update])


  React.useEffect( () => {
    fetch(`http://localhost:3000/emp?_page=${pages}&_limit=5`)
    .then((res) => res.json() )
    .then( res => {
      setData(res);
    })
    .catch( err => console.log(err) )
  }, [pages, update])

  const onAdd = (item) => {
    const config = {
      method: "POST",
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(item)
    }

    fetch("http://localhost:3000/emp", config);
    setUpdate( !update);
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
    setUpdate( !update );
  }

  const nextPage = (select) => {
    setPages(select)
  }

  return (
    <div className="App">
      <Form onAdd={onAdd} />
      <Table data={req ? data.filter( (item) => item.dep === req ) : data} filterBy={filterBy} deleteEmp={deleteEmp}/>  
      <Pagination total={totalPages} page={pages} nextPage={nextPage}/>
    </div>
  );
}

export default App;
