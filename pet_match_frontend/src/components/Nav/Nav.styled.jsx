import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: space-between;

  .logo {
    align-self: center;
    padding-left: 10px;
    font-size: 35px
  }
`

const Welcome = styled.div`
  align-self: center; 
  font-size: 20px;
  padding-right: 150px;

  @media (max-width: 760px) {
    display: none;
  }
`

const UL = styled.div`
  list-style: none;
  align-items: center;
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 10px;
  height: auto;
  width: 200px;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
  display: ${({ open }) => open ? 'flex' : 'none'};
  transition: all 0.3s ease-in-out;
  top: 0;
  right: 0;
  font-size: 20px;
  margin-top: 65px;
  margin-right: 10px;

  li {
    padding 15px;
  }
`
const Burg = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 25px;
  display: flex;
  justify-content: space-around; 
  flex-flow: column nowrap;

  div {
    width: 2.5rem;
    height: .25rem;
    border-radius: .25rem;
    background-color: ${({ open }) => open ? '#E5BACE' : '#EF0D50'};
    transform-origin: 4px;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
      transition: 0.3s linear;
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? '0' : '1'};
    } 

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
      transition: 0.3s linear;
    }
  }
`

export {
  Nav,
  UL,
  Burg,
  Welcome,
}