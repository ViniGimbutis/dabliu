import React, { useState } from "react";
import { Container, Title, Content } from "./styled";
import { FiPlusCircle } from "react-icons/fi";
import { VscEyeClosed } from "react-icons/vsc";
import Image from "next/image";

interface AllProps {
  title: string;
  image: string;
  text: String;
  al: string;
}

const ItemList = (props: AllProps) => {
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(!show);
  };
  return (
    <Container>
      <Title>
        <div
          onClick={() => {
            setShow(!show);
          }}
        >
          <h4>{props.title}</h4>
          <label onClick={changeShow}>
            {show ? <VscEyeClosed /> : <FiPlusCircle />}
          </label>
        </div>
        {show ? (
          <Content>
            <p>{props.text}</p>
            <a>
              <Image
                src={props.image}
                alt={props.al}
                width={450}
                height={300}
              />
            </a>
          </Content>
        ) : (
          <></>
        )}
      </Title>
    </Container>
  );
};

export default ItemList;
