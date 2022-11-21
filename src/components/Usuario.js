import React from "react";

function Usuario(props) {
  const [nome, setNome] = React.useState("catana");
  const [foto, setFoto] = React.useState("assets/img/catanacomics.svg");

  function alterarNome() {
    setNome(prompt("Digite seu nome"));
  }
  function alterarFoto() {
    setFoto(prompt("Insira sua foto"));
  }

  return (
    <div data-test="user" className="usuario">
      <img data-test="profile-image" onClick={alterarFoto} src={foto} alt="" />
      <div className="texto">
        <strong>{props.nomeUsuarioSideBar}</strong>
        <span data-test="name">
          {nome}
          <ion-icon
            data-test="edit-name"
            onClick={alterarNome}
            name="pencil"
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
export default function UsuarioSideBar() {
  return <Usuario nomeUsuarioSideBar="catanacomics" />;
}
