import { useEffect } from 'react';
import React, { useState } from 'react';
import ClienteRepositorio from "../core/ClienteRepositorio";
import Cliente from "../core/Cliente";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import useTabelaOuForm from './useTabelaOuForm';

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente();
    // const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const {tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm();

    useEffect(obterTodos,[])
    
    function obterTodos(){
        repo.obterTodos().then(clientes => {
            setClientes(clientes);
            exibirTabela()
        })

    }
    
    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente);
        exibirFormulario();
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente);
        obterTodos()
    }


    async function salvarCliente(cliente: Cliente){
        // console.log(cliente);
        // setVisivel('tabela');
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente(){
        setCliente(Cliente.vazio)
        exibirFormulario()
    }

    return {
        cliente,
        clientes,
        // visivel,
        // setVisivel,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}