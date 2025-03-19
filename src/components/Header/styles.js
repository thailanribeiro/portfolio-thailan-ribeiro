import styled from "styled-components";
import { Link } from "react-router-dom";
import bg from "../../assets/code.jpeg";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.header`
  background-color: #111111;
  color: white;
  width: 100%;
  height: 2.875rem;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.24);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.24);
  box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.24);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;



`;

export const Empty = styled.div`
  display: none;

`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-family: 'Playfair Display', sans-serif;
`;


export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
`;

export const ProfileImage = styled.section`
  padding: 12v 7.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  
  background-image: url(${bg});
  filter: opacity(100%);
  background-color: #111111;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat; 
  height: 60vh;
  width: 100vw;
  background-attachment: normal;
  backdrop-filter: brightness(0.9);
`;


export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  } 


`;



