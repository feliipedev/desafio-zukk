import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import { goToEditUser } from "../../routes/Coordinator";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { apagarUser /* editarUsuario */ } from "../../services/user";
const ScreenContainer = styled.div`
  width: 30vw;
  border-bottom: 1px solid black;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const UserCard = (props) => {
  
  const history = useHistory();
  const classes = useStyles();
  const deleteUser = (id, history) => {
    apagarUser(id, history);
  };
  const onClickCard = (id) => {
    goToEditUser(history, id);
  };
  return (
    <ScreenContainer>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={props.nome}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Cidade:{props.cidade}
                </Typography>
                <ListItemText>Telefone:{props.telefone}</ListItemText>
                <ListItemText>Endereço: {props.endereco}</ListItemText>
                <ListItemText>Bairro: {props.bairro}</ListItemText>
                <ListItemText>UF: {props.uf}</ListItemText>
                <Button onClick={() => onClickCard(props.id)} type={"submit"}>
                  <EditIcon />
                </Button>
                <Button
                  onClick={() => deleteUser(props.id, history)}
                  type={"submit"}
                >
                  <DeleteIcon color="primary" />
                </Button>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </ScreenContainer>
  );
};
export default UserCard;
