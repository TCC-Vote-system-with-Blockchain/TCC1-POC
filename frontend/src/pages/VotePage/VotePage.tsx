import React, { useState } from 'react';
import { getPictures } from '../../utils/getPictures';
import { getAbi } from '../../utils/getAbi';
import { AbiItem } from 'web3-utils';
import Web3 from 'web3';
import './style.css';

export const VotePage = () => {
    const [vote, setVote] = useState('');
    const [displayCandidateName, setdisplayCandidateName] = useState('');
    const [candidatePicture, setCandidatePicture] = useState('');
    const [requestMessage, setRequestMessage] = useState('');
    const web3 = new Web3('http://localhost:7545'); // Conexão com o nó da Ethereum
    const contractAddress = '0xcC80D5C885E59f956402608aBD89049E0f936d82'; // Endereço do contrato na blockchain
    const voteSystem = new web3.eth.Contract(getAbi() as AbiItem[], contractAddress); // Objeto do contrato
    

    function handleVoteChange(event: React.ChangeEvent<HTMLInputElement>) {
        setVote(event.target.value);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setdisplayCandidateName(vote);
        setCandidatePicture(getPictures());

        try {
          const accounts = await web3.eth.getAccounts();
          await voteSystem.methods.votar(vote).send({ from: accounts[0] });
          setRequestMessage('successful')
        } catch (error) {
          setRequestMessage('denied');
          console.error(error);
        }
    }

    async function getVotes(){
        try {
            // const accounts = await web3.eth.getAccounts();
            var ele = await voteSystem.methods.obterTotalVotos(vote).call();
            setRequestMessage('successful')
            alert(ele);
        } catch (error) {
            setRequestMessage('denied');
            console.error(error);
        }
    }

    return(
        <div className='vote-page-container' data-testid="VotePage">
            <div className='content'>
                <div className='candidate-box'>
                    <div className='candidate'>
                        <div className='candidate-info'>
                            <h1>{displayCandidateName}</h1>
                            <div className='request-messsage'>
                                <span style={{display: requestMessage === 'successful' ? 'block' : 'none', color: '#20c720'}}> Voto computado com sucesso! </span>
                                <span style={{display: requestMessage === 'denied' ? 'block' : 'none', color: '#c01f1f'}}> Ocorreu um erro ao computar seu voto. </span>
                            </div>
                        </div>
                        <div className='candidate-picture-box'>
                            <img className='candidate-picture' style={{ border: displayCandidateName ? '1px solid black' : '' }} src={candidatePicture}/>
                        </div>
                    </div>
                </div>
                <div className='add-candidate-form'>
                    <h1 className='candidate-page-title'> Votação </h1>
                    <form onSubmit={handleSubmit} className='input-cadidate-name'>
                        <label> Número do Candidato: </label>
                        <input id='nome' type="number" min={0} value={vote} onChange={handleVoteChange} style={{width:'70%'}}/>
                        <button type="submit" style={{width:'70%'}} disabled={!vote || parseInt(vote) < 0}> Votar </button>
                    </form>
                    <button type="submit" style={{width:'70%'}} disabled={!vote || parseInt(vote) < 0} onClick={getVotes}> Get Votes </button>
                </div>
            </div>
        </div>
    );
};
