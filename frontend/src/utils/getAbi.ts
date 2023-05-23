export const getAbi = () => {
    const abi = [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "candidatoId",
            "type": "uint256"
          }
        ],
        "name": "VotoRegistrado",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "candidatos",
        "outputs": [
          {
            "internalType": "string",
            "name": "nome",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "numero",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "votosRecebidos",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_nome",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_numero",
            "type": "uint256"
          }
        ],
        "name": "adicionarCandidato",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_numero",
            "type": "uint256"
          }
        ],
        "name": "votar",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_numero",
            "type": "uint256"
          }
        ],
        "name": "obterTotalVotos",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "obterCandidatos",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "nome",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "numero",
                "type": "uint256"
              }
            ],
            "internalType": "struct VoteSystem.CandidatoLista[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ];
    return abi;
}