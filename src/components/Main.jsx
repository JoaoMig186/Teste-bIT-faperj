import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Main.css'
import { Modal } from 'react-bootstrap';
import { IMaskInput } from 'react-imask';
import TableUsable from './TableUsable';


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:0,
            nome:'',
            email:'',
            data:'',
            senha:'',
            clientes: [],
            openedModal:false
        }
    }

    registerClient = (cliente) =>{
        if((this.state.nome == "") || (this.state.data == "") || (this.state.email == "") || (this.state.senha== "")){
            return
        } else {
            fetch("https://api-todolist.vercel.app/clientes", {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(cliente)})
            .then(response => {
            if (response.ok){
                this.searchClient();
            } else {
                alert("Erro. Cliente não foi cadastrado, tente novamente");
            }
        })
        }
    }

    componentDidMount(){
        this.searchClient();
    }

    searchClient(){
        fetch("https://api-todolist.vercel.app/clientes")
        .then(response => response.json())
        .then(datas => {
            this.setState({clientes : datas})
        })
    }

    handleClose = () => {
        this.setState({
            openedModal:false
        })
    }

    handleOpen = () => {
        this.setState({
            openedModal:true
        })
    }

    nameSaving = (e) => {
        this.setState({
            nome: e.target.value
            
        })
    }
    emailSaving = (e) => {
        this.setState({
            email: e.target.value
            
        })
    }
    dateSaving = (e) => {
        this.setState({
            data: e.target.value
            
        })
    }
    passwordSaving = (e) => {
        this.setState({
            senha: e.target.value
            
        })
    }

    saveDatas = () => {
        const cliente ={
            id:0,
            nome: this.state.nome,
            email: this.state.email,
            data: this.state.data,
            senha: this.state.senha
        }

        this.registerClient(cliente);
    }
    
    render(){
        
        return(
            <div className='main-content'>
            <h1>Lista de clientes:</h1>
            <p className='info'>(para cadastrar um cliente clique no botão "ADD+" ao final da página)</p>
            
            
            <Modal show={this.state.openedModal} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Registre-se aqui</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                <Form className='form'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome completo" value={this.state.nome} onChange={this.nameSaving} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Entre com seu email" value={this.state.email} onChange={this.emailSaving} required/>
                        <Form.Text className="text-muted">
                            Seus email poderá passar por validações
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Data de nascimento</Form.Label>
                        <Form.Control
                        as={IMaskInput}
                        mask="00/00/0000"
                        placeholder="XX/XX/XXXX"
                        value={this.state.data}
                        onChange={this.dateSaving}
                        required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" value={this.state.senha} onChange={this.passwordSaving} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.saveDatas}>
                        Cadastrar
                    </Button>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <TableUsable/>
            <button className="btn btn-success" onClick={this.handleOpen}>ADD +</button>   
                
            </div>
        )
    }
    }
    

export default Main
