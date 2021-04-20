import styled from 'styled-components';

const Page = styled.div`
  height: 80vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const Welcome = styled.div`
  font-size: 35px;
  margin-bottom: 30px;
`

const SI = styled.div`
  font-size: 25px;
  margin-top: 30px;

  .link {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }

  .link:hover {
    color: ${({ theme }) => theme.primaryhover};
  }
`


export {
  Page,
  Welcome,
  SI,
}