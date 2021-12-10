// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 80%;
margin: 0 auto;
`
const CharacterCard = styled.div`
border: 5px solid black;
width: 30%;
margin: 1%;
background-image: url(${pr => pr.theme});
background-size: cover;
opacity:0.80;
display:flex;

transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    border: 10px solid blue;
    opacity:0.95;
    transform: scale(2,2);
    z-index: 99;
    width: 20%;
    height: 15vh;
`

const Char = styled.h2`
font-size: 2em;
font-family: 'Poller One', cursive;
padding-left: 5%;
`

export default function Character(props) {
   const { theme, characters } = props;
   const values = Object.values(theme);
    return (
        <CharacterWrapper>
            <style>@import url('https://fonts.googleapis.com/css2?family=Poller+One&display=swap');</style>
             {
                characters.map( (character, index) => (
                    <CharacterCard theme={values[index]}>
                        <Char key={index}>{character.name}</Char>
                    </CharacterCard>
                        
                ))
            }
        </CharacterWrapper>
        
    )
    }