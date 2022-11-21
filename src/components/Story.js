export default function Story(props) {
  return (
    <>
      <div className="story" key={props.imagem}>
        <div className="imagem">
          <img src={props.imagem} alt="" />
        </div>
        <div className="usuario">{props.titulo}</div>
      </div>
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </>
  );
}
