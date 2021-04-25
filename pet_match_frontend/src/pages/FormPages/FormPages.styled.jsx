import styled from 'styled-components';

const Page = styled.div`
  height: 92.3vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 20px;
  }

  input, Control {
    width: 250px;
    margin-bottom: 8px;
    border: none;
    border-radius: 10px;
    padding: 5px 0px 5px 5px;
    font-size: 14px;
    font-family: 'Rubik', sans-serif;
    text-align: center;
  }

  input:focus {
    outline: none !important;
    outline-style: none !important;
    box-shadow: none !important;
    border-color: transparent !important;
  }
  

  label {
    font-size: 24px
  }

  Label {
    margin-top: 15px;
  }

  option {
    font-size: 14px;
    font-family: 'Rubik', sans-serif;
  }

  .submit {
    width: auto;
    margin-top: 20px;
    font-size: 18px;
    padding: 10px 20px;
  }
`

const FormButtons = styled.div`
  display: flex;
  justify-content: center;

  button {
    padding: 5px 10px;
    margin: 20px 10px;
  }  
`


export {
  Page,
  FormButtons,
}