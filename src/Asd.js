import React from "react";
import styled from "styled-components";

const Asd = () => {
  return (
    <Wrapper>
      <Icon onClick={() => alert("메롱")} />
    </Wrapper>
  );
};

export default Asd;

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  color: red;
  background-color: aliceblue;
  display: flex;
  align-items: center;

`;
const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: red;
`;
