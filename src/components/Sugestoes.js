import Sugestao from "./Sugestao";

export default function Sugestoes() {
  const arrayObjSugestoes = [
    {
      imagem: "assets/img/bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      imagem: "assets/img/chibirdart.svg",
      nome: "chibirdart",
      razao: "Segue você",
    },
    {
      imagem: "assets/img/razoesparaacreditar.svg",
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      imagem: "assets/img/adorable_animals.svg",
      nome: "adorable_animals",
      razao: "Segue você",
    },
    {
      imagem: "assets/img/smallcutecats.svg",
      nome: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {arrayObjSugestoes.map((s) => (
        <Sugestao
          key={s.imagem}
          imagem={s.imagem}
          nome={s.nome}
          razao={s.razao}
        />
      ))}
    </div>
  );
}
