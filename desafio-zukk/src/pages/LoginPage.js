import React from "react";
import Button from "@material-ui/core/Button";
import logo from "../assets/logo.jpg";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import useForm from "../hooks/useForm";
import {login} from '../services/user'
import useUnprotectedPage from "../hooks/useUnprotectedPage";
const ScreenContainer = styled.div`
  margin-top: 10vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputsContainer = styled.div`
  width: 20vw;
`;
const LogoImage = styled.img`
  width: 30vw;
  max-width: 350px;
`;

const LoginPage = ({ setRightButtonText }) => {
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history, setRightButtonText);
};

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"Name"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"name"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            Fazer Login
          </Button>
        </InputsContainer>
      </form>
    </ScreenContainer>
  );
};
export default LoginPage;
