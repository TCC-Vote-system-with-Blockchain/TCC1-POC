import React, { useState } from 'react';
import { getPictures } from '../../utils/getPictures';
import './style.css';

export const AddCandidatePage = () => {
    const [candidateName, setCandidateName] = useState('');
    const [displayCandidateName, setdisplayCandidateName] = useState('');
    const [candidatePicture, setCandidatePicture] = useState('');
    const [requestMessage, setRequestMessage] = useState('');
    
    function handleCandidateNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCandidateName(event.target.value);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setdisplayCandidateName(candidateName);
        setCandidatePicture(getPictures());

        // try {
        //   const accounts = await web3.eth.getAccounts();
        //   await voteSystem.methods.adicionarCandidato(nomeCandidato).send({ from: accounts[0] });
        //   alert('Candidato adicionado com sucesso!');
        // } catch (error) {
        //   alert('Ocorreu um erro ao adicionar o candidato.');
        //   console.error(error);
        // }
    }

    return(
        <div className='vote-page-container' data-testid="VotePage">
            <div className='content'>
                <div className='candidate-box'>
                    <div className='candidate'>
                        <div className='candidate-info'>
                            <h1>{displayCandidateName}</h1>
                            <div className='request-messsage'>
                                <span style={{display: requestMessage === 'successful' ? 'block' : 'none', color: '#20c720'}}> Candidato adicionado com sucesso! </span>
                                <span style={{display: requestMessage === 'denied' ? 'block' : 'none', color: '#c01f1f'}}> Ocorreu um erro ao adicionar o candidato. </span>
                            </div>
                        </div>
                        <div className='candidate-picture-box'>
                            <img className='candidate-picture' style={{ border: displayCandidateName ? '1px solid black' : '' }} src={candidatePicture}/>
                        </div>
                    </div>
                </div>
                <div className='add-candidate-form'>
                    <h1 className='candidate-page-title'> Adicionar Novo Candidato </h1>
                    <form onSubmit={handleSubmit} className='input-cadidate-name'>
                        <label> Nome do Candidato: </label>
                        <input id='nome' type="text" value={candidateName} onChange={handleCandidateNameChange} style={{width:'70%'}}/>
                        <button type="submit" style={{width:'70%'}} disabled={!candidateName}> Adicionar Candidato </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
