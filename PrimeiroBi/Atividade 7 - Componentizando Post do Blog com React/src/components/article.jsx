export default function article({ titulo, autor, data, conteudo }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p>Por {autor} - {data}</p>
      <div>{conteudo}</div>
    </article>
  );
}