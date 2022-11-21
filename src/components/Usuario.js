import React from "react";

function Usuario(props) {
  const [nome, setNome] = React.useState("catana");
  const [foto, setFoto] = React.useState("assets/img/catanacomics.svg");

  function alterarNome() {
    let nome = prompt("Digite seu nome");
    if (nome !== "") {
      setNome(nome);
    } else {
      prompt("Formato de nome inválido! Digite seu nome novamente");
    }
  }
  function alterarFoto() {
    let foto = prompt("Insira um link de imagem para sua foto");
    if (foto !== "") {
      setFoto(foto);
    } else {
      prompt("Formato de foto não reconhecido! Insira um link válido");
    }
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
