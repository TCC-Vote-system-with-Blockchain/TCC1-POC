// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VoteSystem {
    // Estrutura para armazenar informações de cada candidato
    struct Candidato {
        string nome;
        uint256 votosRecebidos;
    }
    
    // Mapeamento dos candidatos pelo seu ID
    mapping(uint256 => Candidato) public candidatos;
    
    // Array para armazenar os IDs dos candidatos cadastrados
    uint256[] public idsCandidatos;
    
    // Evento para notificar quando um voto for registrado
    event VotoRegistrado(uint256 candidatoId);
    
    // Função para adicionar um novo candidato
    function adicionarCandidato(string memory _nome) public {
        uint256 _candidatoId = idsCandidatos.length;
        candidatos[_candidatoId] = Candidato(_nome, 0);
        idsCandidatos.push(_candidatoId);
    }
    
    // Função para registrar um voto para um candidato
    function votar(uint256 _candidatoId) public {
        require(candidatos[_candidatoId].votosRecebidos >= 0, "Candidato nao encontrado.");
        
        candidatos[_candidatoId].votosRecebidos++;
        
        emit VotoRegistrado(_candidatoId);
    }
    
    // Função para obter o número de votos de um candidato específico
    function obterTotalVotos(uint256 _candidatoId) public view returns (uint256) {
        return candidatos[_candidatoId].votosRecebidos;
    }

    function obterNomesCandidatos() public view returns (string[] memory) {
        uint256 numCandidatos = idsCandidatos.length;
        string[] memory nomesCandidatos = new string[](numCandidatos);
        
        for (uint256 i = 0; i < numCandidatos; i++) {
            nomesCandidatos[i] = candidatos[idsCandidatos[i]].nome;
        }
        
        return nomesCandidatos;
    }
}