import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const StyledToast = styled.div`
  width: 100%;
  height: 50px;
  background: ${(props) => (props.type === "info" ? "rgb(85, 169, 255)" : "red")};
  transition: 0.5s;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  right: ${(props) => props.right};
`;

const Toast = ({ text, type, id, removeToast }) => {
  const [right, setRight] = useState("-300px");

  useEffect(() => {
    let keys = [addToastAni(), ...removeToastAni()];
    return () => {
      keys.forEach((key) => {
        clearTimeout(key);
      });
    };
  }, []);

  const addToastAni = () => {
    return setTimeout(() => {
      setRight("0px");
    }, 0);
  };

  const removeToastAni = () => {
    let key = [];
    key.push(
      setTimeout(() => {
        setRight("-300px");
      }, 2500)
    );
    key.push(
      setTimeout(() => {
        removeToast(id);
      }, 3000)
    );
    return key;
  };

  return (
    <StyledToast
      type={type}
      right={right}
      onClick={() => {
        removeToast(id);
      }}
    >
      <Paragraph text={text}></Paragraph>
    </StyledToast>
  );
};

export default Toast;
