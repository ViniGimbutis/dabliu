import React from "react";
import { Button } from "./styled";
import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

const UpButton = () => {
  return (
    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
      <Button>
        <h3>
          <FiArrowUp />
        </h3>
      </Button>
    </Link>
  );
};

export default UpButton;
