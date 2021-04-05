import styled from 'styled-components'

const ClipText = styled.div`
  background-size: cover;
  position: relative; 
  height: 100%; 

  h1 {
    background-color:black;
    color:white;
    font-size: 10vw; 
    font-weight: 800;
    margin: 0 auto; 
    padding: 10px;
    width: 95%;
    text-align: center; 
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    mix-blend-mode: multiply;
    opacity:0.8
  }
`

export default ClipText