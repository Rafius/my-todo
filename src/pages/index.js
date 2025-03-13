import { useEffect, useState } from 'react';

export default function Home({ message }) {
  return (
    <div>
      <h1>Bienvenido a mi aplicación Next.js con SSR</h1>
      <p>{message}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // Hacemos la llamada a la API durante el SSR
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  // Pasamos los datos como props a la página
  return {
    props: {
      message: data.message, // Le pasamos el mensaje que obtuvimos de la API
    },
  };
}
