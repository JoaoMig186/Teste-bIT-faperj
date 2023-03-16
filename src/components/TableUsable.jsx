import React from 'react';
import Table from 'react-bootstrap/Table';
import '/React/teste-bti-faperj/src/styles/Table.css'

class TableUsable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        clientes: [],
    }
}

componentDidMount(){
  fetch("http://localhost:5000/clientes")
  .then(response => response.json())
  .then(datas => {
      this.setState({clientes : datas})
  })
}

  render(){
    return (
      <div>
        <Table bordered className="bg-transparent text-light mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Data Nasc.</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.clientes.map((cliente) => 
              <tr>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.data}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
      <div className="mobileTable">
        { 
        this.state.clientes.map((cliente) =>
          <div className="eachItem">
            <span>ID: {cliente.id}</span>
            <span>Nome: {cliente.nome}</span>
            <span>Email: {cliente.email}</span>
            <span>Idade: {cliente.data}</span>
          </div>
        )
        }
        
      </div>
      </div>
      
    );
  }
  
}

export default TableUsable;