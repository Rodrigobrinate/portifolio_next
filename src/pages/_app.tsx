import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from "nextjs-google-analytics";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <meta name="keywords" content="
        Desenvolvedor Full Stack Node.js,
         Node.js, JavaScript,
          Desenvolvimento Web, Programação,
           Express.js, Banco de Dados, MongoDB, RESTful API, GraphQL,
            Front-end, React.js, Angular, Vue.js, HTML5, CSS3, Responsive Design,
             Testes Automatizados, Git, Versionamento de Código., para, sistema,
              segurança, usuários, além, programador" />
        <meta name="robots" content="index, follow" />

        {/* Meta tags para redes sociais (Open Graph) */}
        <meta property="og:title" content="Rodrigo Brinate Protazio" />
        <meta property="og:description" content="Sou Rodrigo, um desenvolvedor de software com vasta experiência em resolver problemas complexos e entregar soluções de qualidade. Trabalho com PHP e JavaScript, além de ter um estilo de vida saudável e equilibrado. Busco constantemente aprimorar minhas habilidades e conhecimentos para criar soluções robustas e escaláveis. Valorizo o trabalho em equipe e a colaboração. Neste portfólio, você encontrará projetos que demonstram meu estilo de trabalho e habilidades" />
        <meta property="og:image" content="/profile.png" />
        <meta property="og:url" content="rodrigobrinate.online" />
        <meta property="og:type" content="website" />

        {/* Meta tags para redes sociais (Twitter Card) */}
        <meta name="twitter:title" content="Rodrigo Brinate Protazio" />
        <meta name="twitter:description" content="Sou Rodrigo, um desenvolvedor de software com vasta experiência em resolver problemas complexos e entregar soluções de qualidade. Trabalho com PHP e JavaScript, além de ter um estilo de vida saudável e equilibrado. Busco constantemente aprimorar minhas habilidades e conhecimentos para criar soluções robustas e escaláveis. Valorizo o trabalho em equipe e a colaboração. Neste portfólio, você encontrará projetos que demonstram meu estilo de trabalho e habilidades" />
        <meta name="twitter:image" content="/profile.png" />
        <meta name="twitter:card" content="portifólio Rodrigo Brinate Protazio" />
        <meta name="pinterest-rich-pin" content="true" />
        <meta itemProp="name" content="Título da página" />
        <meta itemProp="description" content="Descrição da página" />
        <meta itemProp="image" content="URL da imagem" />

        <GoogleAnalytics trackPageViews />
  <Component {...pageProps} />
  <Analytics />
  </>
  )
}
