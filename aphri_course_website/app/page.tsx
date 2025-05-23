import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bem-vinda ao Curso Preparatório aPHRi</h1>
      <p className="mb-4">
        Este é o seu portal de estudo personalizado para a certificação Associate Professional in Human Resources – International™ (aPHRi).
      </p>
      <p className="mb-4">
        Utilize a barra lateral à esquerda para navegar entre os módulos do curso e acessar os recursos complementares, como o glossário e os flashcards.
      </p>
      <p className="mb-4">
        Recomendamos começar pelo <Link href="/modules/introduction" className="text-blue-600 hover:underline">Módulo Introdutório</Link> para obter uma visão geral da certificação e de como utilizar este curso da melhor forma.
      </p>
      <p className="mt-8">
        Bons estudos!
      </p>
    </div>
  );
}

