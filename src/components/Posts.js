import Post from "./Post";
export default function Posts() {
  const arrayObjPosts = [
    {
      imagem: "assets/img/meowed.svg",
      titulo: "meowed",
      imagemConteudo: "assets/img/gato-telefone.svg",
      imagemCurtidas: "assets/img/respondeai.svg",
      curtidas: "respondeai",
      numCurtidas: Number(101.523),
    },
    {
      imagem: "assets/img/barked.svg",
      titulo: "barked",
      imagemConteudo: "assets/img/dog.svg",
      imagemCurtidas: "assets/img/adorable_animals.svg",
      curtidas: "adorable_animals",
      numCurtidas: Number(99.159),
    },
  ];
  return (
    <div class="posts">
      {arrayObjPosts.map((p) => (
        <Post
          key={p.imagem}
          imagem={p.imagem}
          titulo={p.titulo}
          imagemConteudo={p.imagemConteudo}
          imagemCurtidas={p.imagemCurtidas}
          curtidas={p.curtidas}
          numCurtidas={p.numCurtidas}
        />
      ))}
    </div>
  );
}
