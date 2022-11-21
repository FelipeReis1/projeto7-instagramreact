import Story from "./Story";
export default function Stories() {
  const arrayObjStories = [
    { imagem: "assets/img/9gag.svg", titulo: "9gag" },
    { imagem: "assets/img/meowed.svg", titulo: "meowed" },
    { imagem: "assets/img/barked.svg", titulo: "barked" },
    {
      imagem: "assets/img/nathanwpylestrangeplanet.svg",
      titulo: "nathanwpylestrangeplanet",
    },
    { imagem: "assets/img/wawawicomics.svg", titulo: "wawawicomics" },
    { imagem: "assets/img/respondeai.svg", titulo: "respondeai" },
    { imagem: "assets/img/filomoderna.svg", titulo: "filomoderna" },
    { imagem: "assets/img/memeriagourmet.svg", titulo: "memeriagourmet" },
  ];
  return (
    <div className="stories">
      {arrayObjStories.map((s) => (
        <Story key={s.imagem} imagem={s.imagem} titulo={s.titulo} />
      ))}
    </div>
  );
}
