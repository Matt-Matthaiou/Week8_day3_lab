import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import Basket from "../components/Basket";
import PosterList from "../components/PosterList";
import UserContext from "../context/UserContext";
import styled from 'styled-components';


const PosterContainer = ()=>
{   
    
    const [userPassword, setUserPassword] = useState('')
    const [userBasket, setUserBasket] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(true)
    const [name, setName] = useState('')
    const [isBasketOpen, setIsBasketOpen] = useState(false)
    
    const [posters, setPosters] = useState(
   
    
        [
            {name: 'batman', description: 'movie poster', price: '20£', dimensions: '23x30'},
            {name: 'Grand Budapest Hotel', description: 'movie poster', price: '25£', dimensions: '49x90'}
        ]
    )

    const handleUserLogIn = ()=>
    {
        setIsModalOpen(false)
    }

    const handleInputChange = (event)=>
    {
        setName(event.target.value)

    }

    const handlePassChange = (event)=>
    {
        setUserPassword(event.target.value)
    }

    const handleBasket = ()=>
    {
        setIsBasketOpen(!isBasketOpen)
    }

    const addItemToBasket = (item)=>
    {
        let newBasket = [...userBasket];
        newBasket.push(item);
        setUserBasket(newBasket);
        
    }

    const WelcomeMessage = styled.h2`
    text-align: center;
    color: green;
    `
    const InputStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 0px;
    padding: 6px;
    background-color: #ca7a4e;
    
    `
    const ButtonStyled = styled.button`
    border-radius: 12px;
    background-color: beige;
    `
   const NewInputStyled = styled.input`
    diplay: flex;
    justify-content: center;
   `

    return(
        <>
         
        <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}>
            <WelcomeMessage id='login-message'>Welcome to Poster Shop</WelcomeMessage>
            <div id='login-div'>
                <label id='name-input'>Enter name</label>
                <input type='text' value={name} onChange={handleInputChange}></input>
                <label>Password</label>
                <input type='text' value={userPassword} onChange={handlePassChange}></input>
            </div>
            
            <ButtonStyled onClick={handleUserLogIn}>Enter</ButtonStyled>
           
        </Modal>
            <h1>Custom Posters</h1>
            <UserContext.Provider value={{name, userPassword}}>
            <button><img onClick={handleBasket} height='50' src='https://media.istockphoto.com/vectors/shopping-basket-on-white-background-vector-illustration-vector-id1145495034?k=20&m=1145495034&s=612x612&w=0&h=qi33-YNcv7AOAeW4aGx4MCLPA9W2FBMwMitb0Cesupw='/></button>
            <Modal
            isOpen={isBasketOpen}
            >
            <button><img onClick={handleBasket} height='50' src='https://toppng.com/uploads/preview/red-cross-transparent-png-red-cross-image-transparent-background-11563094367qdhczeqtto.png'/></button>
            <Basket userBasket={userBasket}/>
            </Modal>
            <PosterList posters={posters} addItemToBasket={addItemToBasket}/>
            </UserContext.Provider>
        </>
    )   
}

export default PosterContainer;