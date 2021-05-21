import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import useForm from "../hooks/useForm";
import { goToRegisteredCustomers } from "../routes/Coordinator";
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import useRequestData from '../hooks/useRequestData'
import {editarUser} from '../services/user'
const ScreenContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 8vh;
`;
const InputsContainer = styled.div`
  width: 30vw;
`;

const EditUser = () => {
  useProtectedPage()
  const params = useParams()
  const users = useRequestData([], `https://rest-api-user.herokuapp.com/users/${params.id}`)
  const [form, onChange, clear] = useForm( 
    { id: "", nome: "", endereco: "", bairro: "", uf: "", telefone: "" /* email: ""  */},
  );
  const history = useHistory();
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    editarUser(form, history, clear, params.id)
    clear()
    goToRegisteredCustomers(history)
    
};
  return (
    <ScreenContainer>
      <InputsContainer>
      <form onSubmit={onSubmitForm}>
      <TextField
          name={"id"}
          value={form.id}
          onChange={onChange}
          label={users.id}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"number"}
        />
          <TextField
          name={"nome"}
          value={form.nome}
          onChange={onChange}
          label={users.nome}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"name"}
        />
        <TextField
          name={"endereco"}
          label={users.endereco}
          value={form.endereco}
          onChange={onChange}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"name"}
        />
        <TextField
          name={"bairro"}
          label={users.bairro}
          onChange={onChange}
          value={form.bairro}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"name"}
        />
        <TextField
          name={"cidade"}
          label={users.cidade}
          value={form.cidade}
          onChange={onChange}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"name"}
        />
        <TextField
          name={"telefone"}
          label={users.telefone}
          onChange={onChange}
          value={form.telefone}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"name"}
        />
        <TextField
          name={"uf"}
          label={users.uf}
          onChange={onChange}
          value={form.uf}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"name"}
        />
        {/* <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"name"}
        /> */}
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}

        >
          Salvar
        </Button>
        <Button
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          onClick={() => goToRegisteredCustomers(history)}
        >
          Voltar
        </Button>
      </form>
      </InputsContainer>
    </ScreenContainer>
  );
};
export default EditUser;