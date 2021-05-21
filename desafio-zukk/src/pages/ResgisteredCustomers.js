import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import styled from "styled-components";
import { AddRecipeButton } from "./styled";
import { Add } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { goToAddUser } from "../routes/Coordinator";
import UserCard from "../components/UserCard/UserCard";
import useRequestData from '../hooks/useRequestData'
const ScreenContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;
const CardContainer = styled.div`
  margin: 20px;
  height: 50vh;
`;
const RegisteredCustomers = () => {
  useProtectedPage();
   
  const users = useRequestData([], 'https://rest-api-user.herokuapp.com/users/')
  const history = useHistory();

  const usersComponent = users.map((pessoas) =>{
    return <UserCard id={pessoas.id} nome={pessoas.nome} endereco={pessoas.endereco} bairro={pessoas.bairro} cidade={pessoas.cidade} uf={pessoas.uf} telefone={pessoas.telefone}/>
  })
  return (
    <ScreenContainer>
      <CardContainer>
        {usersComponent}
      </CardContainer>
      
      <AddRecipeButton color={"primary"}onClick={() => goToAddUser(history)}>
        <Add />
      </AddRecipeButton>
    </ScreenContainer>
  );
};
export default RegisteredCustomers;
