import React from "react";
export default function Post(props) {
  const [cliqueCurtida, setCliqueCurtida] = React.useState("heart-outline");
  const [cliqueSalvar, setCliqueSalvar] = React.useState("bookmark-outline");
  const [numCurtidasAtual, setNumCurtidasAtual] = React.useState(
    props.numCurtidas
  );

  function curtir() {
    if (cliqueCurtida === "heart-outline") {
      setCliqueCurtida("heart");
      setNumCurtidasAtual(props.numCurtidas + 0.001);
    } else {
      setCliqueCurtida("heart-outline");
      setNumCurtidasAtual(props.numCurtidas);
    }
  }
  function salvar() {
    if (cliqueSalvar === "bookmark-outline") {
      setCliqueSalvar("bookmark");
    } else {
      setCliqueSalvar("bookmark-outline");
    }
  }
  function curtirCliqueImagem() {
    if (cliqueCurtida === "heart-outline") {
      setCliqueCurtida("heart");
      setNumCurtidasAtual(props.numCurtidas + 0.001);
    } else {
      return;
    }
  }

  return (
    <div data-test="post" class="post" key={props.titulo}>
      <div class="topo">
        <div class="usuario">
          <img src={props.imagem} alt="" />
          {props.titulo}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          data-test="post-image"
          onDoubleClick={curtirCliqueImagem}
          src={props.imagemConteudo}
          alt=""
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              data-test="like-post"
              onClick={curtir}
              name={cliqueCurtida}
              class={cliqueCurtida}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              data-test="save-post"
              onClick={salvar}
              name={cliqueSalvar}
            ></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imagemCurtidas} alt="" />
          <div class="texto">
            Curtido por <strong>{props.curtidas}</strong> e{" "}
            <strong data-test="likes-number">
              outras {numCurtidasAtual} pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
