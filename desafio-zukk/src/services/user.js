import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRegisteredCustomers } from "../routes/Coordinator";

export const login = (body, clear, history, setRightButtonText) => {
  axios
    .post(`${BASE_URL}login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToRegisteredCustomers(history);
      setRightButtonText("Logout");
    })
    .catch((err) => alert("github.com/feliipedev"));
};
export const editarUser = (form, history, clear, id) =>{
  axios
  .patch(`https://rest-api-user.herokuapp.com/users/${id}`, form)
  .then((res) =>{
    clear();
    goToRegisteredCustomers(history);
    alert("Usuario editado")
  })
  .catch((err) => alert("Falha ao editar usuario"))
}
export const cadastrarUser = (form, history, clear, setRightButtonText) => {
  axios
    .post("https://rest-api-user.herokuapp.com/users/", form)
    .then((res) => {
      clear();
      goToRegisteredCustomers(history);
    })
    .catch((err) => alert("github.com/feliipedev"));
};

export const apagarUser = (id, history) =>{
  axios
  .delete(`https://rest-api-user.herokuapp.com/users/${id}`)
  .then((res) =>{
    alert("usuario deletado")
    document.location.reload(true)
    goToRegisteredCustomers(history);
  })
  .catch((err) => alert("Erro ao deletar usuario."));
}