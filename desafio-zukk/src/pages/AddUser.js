import React, { useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import useForm from "../hooks/useForm";
import { goToRegisteredCustomers } from "../routes/Coordinator";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { cadastrarUser } from "../services/user";
import useProtectedPage from "../hooks/useProtectedPage";

const ScreenContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const InputsContainer = styled.div`
  width: 30vw;
`;

const AddUser = () => {
  useProtectedPage();

  const [form, onChange, clear] = useForm({
    id: "",
    nome: "",
    endereco: "",
    bairro: "",
    uf: "",
    telefone: "",
    cep: "",
  });

  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    cadastrarUser(form, history, clear);
    clear();
  };

  return (
    <ScreenContainer>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"cep"}
            value={form.cep}
            onChange={onChange}
            label={"Cep sem traço"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"number"}
          />

          <TextField
            name={"id"}
            value={form.id}
            onChange={onChange}
            label={"ID"}
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
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"name"}
          />
          <TextField
            name={"endereco"}
            value={form.endereco}
            onChange={onChange}
            label={"Endereço"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"name"}
          />
          <TextField
            name={"bairro"}
            value={form.bairro}
            onChange={onChange}
            label={"Bairro"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"name"}
          />
          <TextField
            name={"cidade"}
            value={form.cidade}
            onChange={onChange}
            label={"UF"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"name"}
          />
          <TextField
            name={"telefone"}
            value={form.telefone}
            onChange={onChange}
            label={"Telefone"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"name"}
          />

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            Cadastrar
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
export default AddUser;
