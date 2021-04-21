// index.tsx
// SSG

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },

    // Define o tempo em que uma nova versão da página é gerada.
    // Recebe um valor em segundos.
    // 8 horas definidas aqui.
    revalidate: 60 * 60 * 8,
  }
}