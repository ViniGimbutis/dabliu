import Image from "next/image";
import React from "react";
import ItemList from "../ItemList";
import { Container, Textos, Center, Passos, Space, CenterText } from "./style";

const QuemSomos = () => {
  return (
    <Container id="Impressao3D">
      <Textos>
        <h1>Como a impressão 3D está sendo usada no mercado</h1>
        <Center>
          <Image
            src="/impressao/impressora.gif"
            alt="Impressora 3D"
            width={450}
            height={300}
          />
        </Center>
        <CenterText>
          <p>
            A tecnologia de impressão 3D também pode produzir peças com formas
            muito complexas. Por exemplo, nas indústrias aeroespacial e
            automotiva, a tecnologia de impressão 3D é usada para produzir
            turbinas a gás e peças de motores.
          </p>
          <p>
            No campo da medicina, a tecnologia de impressão 3D pode ser usada
            para fazer próteses e implantes. Além disso, pesquisas estão em
            andamento sobre como usar a tecnologia de impressão 3D para criar
            órgãos artificiais. A vantagem de usar a tecnologia de impressão 3D
            na área médica é que ela pode personalizar órgãos e partes do corpo
            que combinam perfeitamente com o corpo do paciente, o que reduz
            muito o risco de rejeição de órgãos”.
          </p>
        </CenterText>
        <Space />
        <h2>Benefícios</h2>
        <CenterText>
          <h3>Velocidade</h3>
          <p>
            Uma das principais vantagens da impressão 3D é que em comparação com
            os métodos de fabricação tradicionais, a velocidade de produção de
            peças é mais eficiente. O modelo com aparência de design complexo
            pode ser exportado a partir de software e produzido pela impressora
            3D em algumas horas. A vantagem é que a ideia de projeto pode ser
            verificada e alterada rapidamente.
          </p>
          <p>
            No passado, pode levar dias ou mesmo semanas para fazer um protótipo
            através do processamento tradicional, enquanto a impressão 3D daria
            o modelo para o designer em algumas horas.
          </p>
          <h3>Sustentabilidade e desperdício</h3>
          <p>
            Métodos de fabrica tradicionais (tais como a moagem ou CNC) retiram
            uma grande quantidade de material excedentário do material inicial,
            resultando numa grande quantidade de resíduos. A impressão 3D
            normalmente usa apenas a quantidade de materiais necessários para
            fazer peças. Matérias-primas utilizadas na maioria dos processos
            podem ser recicladas e reutilizadas em vários projetos. Então há
            pouco desperdício no processo de impressão 3D
          </p>
          <h3>Personalização</h3>
          <p>
            A impressão 3D pode não só proporcionar mais liberdade de design,
            mas também personalizar completamente o projeto. Como a tecnologia
            de impressão 3D atual só pode produzir um pequeno número de peças de
            cada vez, é muito adequado para produção personalizada em pequenos
            lotes.
          </p>
        </CenterText>
        <Space />
        <h2>O que posso imprimir</h2>
        <ItemList
          title="Suporte para celular"
          text="Um dos problemas de suportes para celular é que ou o celular não tem
        apoio e cai do suporte ou o celular tem apoio mas da trabalho
        monta-lo. Esse suporte busca solucionar esse problema de forma
        engenhosa e muito legal!"
          image="/impressao/Suporte_para_Celular_modo_Cinema.png"
          al="Suporte para Celular modo Cinema"
        />

        <ItemList
          title="Secador de Talheres"
          text=" Uma das coisas mais legais da impressão 3D é a possibilidade de
          personalizar coisas simples que passam despercebidas. É o caso desse
          secador de talheres. Além de bonitinho evita aquela poça que ser forma após a lavagem pois
          a tromba do elefante direciona tudo para dentro da pia."
          image="/impressao/Secador_de_Talheres_Jumbo.png"
          al="Secador de Talheres Jumbo"
        />

        <ItemList
          title="Clips para Fechamento de Embalagem"
          text="Todos passam por esse problema. Você precisa fechar aquela embalagem
          mas tudo que tem em mãos são pregadores de roupa. Esses clips são muito mais eficientes. Imprima alguns e você nunca
          mais passará por esse problema."
          image="/impressao/Clips_para_Fechamento_de_Embalagem.png"
          al="Clips para Fechamento de Embalagem"
        />

        <ItemList
          title="Suporte para Celular Amplificador"
          text=" Você pode comprar um dock de centenas de reais para o seu smartphone,
          ou simplesmente imprimir um. O mais legal é que ele também serve como
          decoração muito bonitinha"
          image="/impressao/Suporte_para_Celular_Amplificador.png"
          al="Suporte para Celular Amplificador"
        />
        <ItemList
          title="Caneca Flutuante"
          text="Uma caneca para impressionar suas visitas. Decoração indispensável
          para os amantes de café. Se não for o seu caso, imprimia para seu
          amigo amante de café, sua amizade estará garantida pelo resto da vida!"
          image="/impressao/Caneca_Flutuante.png"
          al="Caneca Flutuante"
        />

        <Space />
        <Space />
        <Center>
          <h2>
            Que tipo de material você pode imprimir com uma impressora 3D?
          </h2>
          <p>Trabalhamos com PLA, ABS, PETG.</p>
          <Space />
          <h2>
            Qual o tamanho dos objetos que você imprime com uma impressora 3D?
          </h2>
          <p>De acordo com as medidas passadas pelo cliente.</p>
          <Space />
          <h2>
            Você pode realmente imprimir qualquer coisa com uma impressora 3D?
          </h2>
          <p>SIM! Tudo depende de sua criatividade.</p>
        </Center>
        <Space />
        <Space />
        <Space />
        <h2>Como Trabalhamos?</h2>
        <Space />
        <Passos>
          <div>
            <h3>CONTE SUA IDEIA</h3>
            <p>
              Envie imagens de referência e a ideia que gostaria de desenvolver.
            </p>
            <Image
              src="/impressao/passo1.png"
              alt="passo1"
              width={450}
              height={300}
            />
          </div>
          <div>
            <h3>Veja seu projeto em 3D antes de iniciarmos sua produção.</h3>
            <p>Você pode solicitar alterações se necessário.</p>
            <Image
              src="/impressao/passo2.png"
              alt="passo2"
              width={450}
              height={300}
            />
          </div>
          <div>
            <h3>PRODUÇÃO 3D</h3>
            <p>
              O layout aprovado vai para produção, realizada em nossas
              impressoras 3D
            </p>
            <Image
              src="/impressao/passo3.png"
              alt="passo3"
              width={300}
              height={250}
            />
          </div>
        </Passos>
      </Textos>
    </Container>
  );
};

export default QuemSomos;
