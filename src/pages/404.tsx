import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Rodrigo Brinate Protazio</title>
        <meta
          name="description"
          content="Sou Rodrigo, um desenvolvedor de software com vasta experiência em resolver problemas complexos e entregar soluções de qualidade. 
          Trabalho com PHP e JavaScript, além de ter um estilo de vida saudável e equilibrado. Busco constantemente aprimorar minhas habilidades e
           conhecimentos para criar soluções robustas e escaláveis. Valorizo o trabalho em equipe e a colaboração. Neste portfólio, 
           você encontrará projetos que demonstram meu estilo de trabalho e habilidades para			
           sistema			
           segurança			
           usuários			
           além"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h2>
            <Link href="/">Rodrigo Brinate Protazio</Link>
          </h2>
          <ul className={styles.headerList}>
            <li>
              <Link href="#stacks">Stacks</Link>
            </li>
            <li>
              <Link href="#sobre">Sobre min</Link>
            </li>
            <li>
              <Link href="#curriculo">Currículo</Link>
            </li>
            <li>
              <Link href="#project">Projetos</Link>
            </li>
          </ul>
        </header>

        <section className={styles.section1}>
          <span>
            <div>
              <h1 className="tw">Rodrigo Brinate Protazio</h1>

              <h4>Web Developer</h4>
              <p>
                Desenvolvedor full stack apaixonado por criar soluções digitais
                inovadoras. Confira meu portfólio e descubra o que posso fazer
                por você.
              </p>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/16o8xfNPfUdJON73d2SXBampryNkTbj6N/view?usp=sharing"
              >
                <button>Download Curriculo</button>
              </Link>
              <br />
              <Link target="_blank" href="https://wa.me/5528999190355">
                <button>Entar em contato</button>
              </Link>
            </div>

            <Image
              src="/banner.png"
              width={250}
              height={250}
              quality={80}
              alt="ilustração de um programador"
            />
          </span>
        </section>

        <section
          className={styles.section2}
          data-aos="zoom-in"
          id="stacks"
          data-aos-duration="1000"
        >
          <h1>Stack</h1>
          <br />
          <br />
          <ul>
            <li>
              <Image width={250} height={200} quality={80} src="/html.png" alt="html" />
              <p>
                Concimentos e epeiências em HTML 5 para criação de sites
                asscessíveis{" "}
              </p>
            </li>
            <li style={{ marginTop: "-80px" }}>
              <Image width={200} height={200} quality={80} src="/css.png" alt="css" />
              <br />
              <br />
              <p style={{ marginTop: "-20px" }}>
                Habilidades em desenvolver designs responsíveis, elegantes e
                animados
              </p>
            </li>
            <li>
              <Image width={120} height={120} quality={80} src="/js.png" alt="javascript" />
              <p>
                Competencia na criação de sitemas e funcinalidades que facilitam
                a vida do usuário
              </p>
            </li>
          </ul>
        </section>
        <section
          className={styles.section3}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <ul>
            <li>
              <Image width={230} height={200} quality={80} src="/react.png"  alt="reactJs" />
            </li>
            <li style={{ marginTop: "-80px" }}>
              <Image width={330} height={280} quality={80}
                src="/node.png"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
               
                alt="nodejs"
              />
            </li>
            <li>
              <Image width={230} height={200} quality={80} src="/nest.png"  alt="nestjs" />
            </li>
          </ul>
        </section>

        <section
          className={styles.section4}
          data-aos="zoom-in"
          id="sobre"
          data-aos-duration="1000"
        >
          <h1>Sobre min</h1>
          <br />
          <br />
          <span>
            <Image
              src="/profile.png"
              width={100}
              height={100}
              style={{ borderRadius: "50%" }}
              alt=""
            />
          </span>
          <br />
          <p>
            Meu nome é Rodrigo e sou um desenvolvedor de software com vasta
            experiência em resolver problemas complexos e entregar soluções de
            qualidade. Ao longo de minha carreira, desenvolvi habilidades
            técnicas que me permitem trabalhar em diferentes plataformas e
            linguagens de programação, como PHP e JavaScript.
            <br />
            <br />
            Além disso, também sou um praticante assíduo de atividades físiscas
            Acredito que um estilo de vida saudável e equilibrado é fundamental
            para atingir um alto desempenho, tanto no trabalho quanto na vida
            pessoal. Essa mentalidade se reflete em minha abordagem ao
            desenvolvimento de software, onde busco sempre entregar soluções
            robustas, escaláveis e fáceis de manter.
            <br />
            <br />
            Minha paixão por tecnologia me mantém constantemente atualizado
            sobre as tendências mais recentes no mercado de desenvolvimento de
            software. Sempre estou em busca de aprimorar minhas habilidades e
            conhecimentos, seja através de cursos, treinamentos, eventos ou
            simplesmente lendo blogs e artigos relevantes.
            <br />
            <br />
            Acima de tudo, sou um profissional que valoriza o trabalho em equipe
            e a colaboração. Acredito que, ao unir forças e compartilhar ideias,
            podemos criar soluções ainda mais inovadoras e eficientes.
            <br />
            <br />
            Neste portfólio, você encontrará alguns dos projetos que desenvolvi
            ao longo de minha carreira, cada um deles com seu próprio conjunto
            de desafios e soluções. Espero que isso lhe dê uma ideia do meu
            estilo de trabalho e das habilidades que posso trazer para sua
            empresa.
          </p>
        </section>
        <br />
        <br />
        <section
          className={styles.section5}
          data-aos="zoom-in"
          id="curriculo"
          data-aos-duration="1000"
        >
          <h1>Currículo</h1>
          <br />
          <br />
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/16o8xfNPfUdJON73d2SXBampryNkTbj6N/view?usp=sharing"
          >
            <button>Currículo em pdf</button>
          </Link>
        </section>
        <section
          className={styles.section6}
          data-aos="zoom-in"
          id="project"
          data-aos-duration="1000"
        >
          <h1 className="text-green-600">Projetos</h1>
          <p>
            <strong>Introdução</strong>
            <br />
            <br />
            Desenvolvi um projeto em React JS, Node.js, Express.js e TypeScript
            para uma empresa de telecomunicações. O objetivo do sistema é
            gerenciar os técnicos e as atividades que eles realizam em
            determinadas cidades. Além disso, a aplicação conta com um sistema
            de autenticação, autorização e atualização em tempo real utilizando
            web sockets. O projeto apresentou diversos desafios, como a
            implementação do drag and drop e a utilização de web sockets, mas
            todos foram superados com sucesso. Segurança
            <br />
            <br />
            Para garantir a segurança do projeto, adotei diversas medidas
            importantes. Uma delas foi a implementação da estratégia de token
            JWT (JSON Web Tokens) para autenticação. Com isso, é possível
            garantir a segurança na transmissão de dados entre cliente e
            servidor. Outra medida foi a implementação de um sistema de
            autorização, permitindo que o cliente possa separar seus usuários
            por departamentos e definir diferentes níveis de acesso para cada um
            deles. Com isso, é possível garantir que apenas usuários autorizados
            possam acessar determinadas funcionalidades e recursos do sistema.
            Em relação à infraestrutura, implementei o sistema dentro de um
            container Docker, o que possibilita uma melhor gestão e controle dos
            recursos utilizados, além de facilitar a escalabilidade do sistema.
            Além disso, implementei um firewall para o bloqueio de portas
            desnecessárias, o que impede que usuários mal-intencionados possam
            acessar o sistema de forma não autorizada. Por fim, implementei uma
            estratégia de bloqueio de IP para evitar ataques DDoS ou de força
            bruta. Essa estratégia funciona bloqueando automaticamente o IP de
            um usuário após 500 requisições em um período de 2 minutos. Dessa
            forma, o sistema pode evitar que usuários maliciosos comprometam a
            segurança e a disponibilidade da aplicação, mantendo o acesso livre
            para usuários comuns.
            <br />
            <br />
            <strong>Infraestrutura</strong>
            <br />
            <br />
            Como mencionado anteriormente, implementei o sistema dentro de um
            container Docker para garantir uma melhor gestão e controle dos
            recursos utilizados, além de facilitar a escalabilidade do sistema.
            Essa escolha também permite uma maior flexibilidade na configuração
            do ambiente de desenvolvimento e de produção. Outra medida
            importante foi a utilização de web sockets para atualização em tempo
            real da aplicação. Essa funcionalidade foi implementada com sucesso
            e garante uma maior interatividade do sistema, possibilitando que as
            atualizações sejam feitas em tempo real para todos os usuários.
            <br />
            <br />
            <strong>Conclusão</strong>
            <br />
            <br />
            Em resumo, o meu projeto demonstra uma abordagem completa e
            profissional para o gerenciamento de equipes de técnicos em uma
            empresa de telecomunicações, oferecendo segurança, eficiência e
            flexibilidade aos usuários do sistema. Com a implementação das
            funcionalidades de autenticação, autorização e atualização em tempo
            real, foi possível oferecer uma solução completa para o
            gerenciamento de equipes. A escolha de implementar o sistema dentro
            de um container Docker e a utilização de web sockets para
            atualização em tempo real também foram medidas importantes para
            garantir uma melhor infraestrutura e disponibilidade do sistema. Por
            fim, a implementação de medidas de segurança, como a utilização de
            token JWT, firewall e bloqueio de IP, garantiu uma maior segurança
            na transmissão de dados e no acesso ao sistema. Em resumo, o projeto
            que desenvolvi é uma solução completa e profissional para o
            gerenciamento de equipes de técnicos em uma empresa de
            telecomunicações. Com a implementação de funcionalidades avançadas
            de autenticação, autorização e atualização em tempo real, além de
            medidas de segurança e infraestrutura robustas, é possível garantir
            uma maior eficiência e segurança no gerenciamento das atividades e
            equipes da empresa.
          </p>

          <figure>
            <Image
            width={500}
            height={400}
              src="/mapa-de-area.gif"
              alt="projeto mapeamento de técnicos por cidade"
            />
          </figure>
        </section>
        <br />
        <br />
      </main>
    </>
  );
}
