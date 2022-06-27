import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Textos } from "./style";

const QuemSomos = () => {
  return (
    <Container id="QuemSomos">
      <Textos>
        <h1>Sobre nós</h1>
        <p>
          Trabalhamos há mais de 30 anos no mercado, atuando em grandes empresas
          do mercado nacional, como Mondial, Begel, Esmaltec, Colormac, entre
          outros. Nosso foco é design, em específico o de produtos.
        </p>
        <p>
          Fazemos qualquer outro tipo de arte, sempre usamos o que há de mais
          moderno em tecnologia e software para realizar o trabalho, para que
          você pode ter certeza de que seu produto estará na vanguarda.
        </p>
        <p>
          Trazendo um design novo e moderno em um curto prazo. Realizamos
          impressões 3D, fazemos a modelagem ou se preferir apenas a impressão
          com um arquivo enviado para nos.
        </p>
        <p>Garantimos a satisfação do cliente em pouco periodo de tempo!</p>
        <p>Além disso, temos um preço muito bom pelos nossos serviços.</p>
        <p>
          Impressoras 3D são máquinas que constroem objetos adicionando camadas
          de material até que o objeto esteja completo. O objeto é construído a
          partir de um modelo 3D ou outra fonte de dados eletrônica.
        </p>
        <p>
          Para criar o modelo, engenheiros ou projetistas de produto usam
          software de design auxiliado por computador (CAD). Depois que o modelo
          3D é criado, ele pode ser exportado para um formato de arquivo que
          pode ser lido pela impressora.
        </p>
        <p>
          A vantagem de usar uma impressora 3D em relação aos métodos
          tradicionais de fabricação é que ela pode criar formas complexas que
          seriam difíceis ou impossíveis de fazer usando outros métodos. Além
          disso, a impressão 3D é muito mais rápida do que outros métodos, como
          a usinagem a partir de um bloco sólido de material.
        </p>
      </Textos>
    </Container>
  );
};

export default QuemSomos;
