// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Ownable.sol";

contract VoteSystem is Ownable{
    
    // Evento para notificar quando um voto for registrado
    event VotoRegistrado(uint256 candidatoId);
    
    // Estrutura para armazenar informações de cada candidato
    struct Candidato {
        string nome;
        uint256 numero;
        uint256 votosRecebidos;
    }
    struct CandidatoLista {
            string nome;
            uint256 numero;
    }  

    // array de candidatos
    Candidato[] public candidatos;

    // Função para adicionar um novo candidato
    function adicionarCandidato(string memory _nome, uint256 _numero) public onlyOwner {
        
        for (uint256 i = 0; i < candidatos.length; i++) {
            if (candidatos[i].numero == _numero) {
                revert("Numero ja cadastrado!");
            }
        }
        Candidato memory candidato = Candidato(_nome, _numero, 0); 
        candidatos.push(candidato);
        
    }

    function votar(uint256 _numero) public {
        uint256 indice = buscarIndiceCandidatoPorNumero(_numero);
        candidatos[indice].votosRecebidos++;
        emit VotoRegistrado(candidatos[indice].numero);   
    }
    function buscarIndiceCandidatoPorNumero(uint256 _numero) internal view returns (uint256) {
        for (uint256 i = 0; i < candidatos.length; i++) {
            if (candidatos[i].numero == _numero) {
                return i;
            }
        }
        revert("Candidato nao encontrado");
    }
     function obterTotalVotos(uint256 _numero) public view returns (uint256) {
        uint256 indice = buscarIndiceCandidatoPorNumero(_numero);
        return candidatos[indice].votosRecebidos;
    }

    function obterCandidatos() public view returns (CandidatoLista[] memory) {
        
         
        CandidatoLista[] memory candidatosRetorno = new CandidatoLista[](candidatos.length);
        
        for (uint256 i = 0; i < candidatos.length; i++) {
            candidatosRetorno[i].nome = candidatos[i].nome;
            candidatosRetorno[i].numero = candidatos[i].numero;
        }
        
        return candidatosRetorno;
    }
   
} 