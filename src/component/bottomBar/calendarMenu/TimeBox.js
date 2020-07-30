import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paragraph from "../../../component/common/Paragraph";

const StyledTimeBox = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  font-size: 2.5rem;
  align-items: center;
  box-sizing: border-box;
  padding-left: 20px;
  background: #c4c4c4;
  border-bottom: 1px solid #999;
`;
const StyledDateTime = styled.div`
  text-align: center;
`;

const timestampFormat = ({ time, second }) => {
  return `${time}:${second}`;
};

function TimeBox({ onclick, dateTimeFormat, datestamp }) {
  const [timestamp, setTimestamp] = useState(timestampFormat(dateTimeFormat()));

  //초가 바뀔 때 마다 변경
  useEffect(() => {
    let key = setTimeout(() => {
      setTimestamp(timestampFormat(dateTimeFormat()));
    }, 1001);
    return () => {
      clearTimeout(key);
    };
  }, [timestamp]);
  return (
    <StyledTimeBox onClick={onclick}>
      <StyledDateTime>
        <Paragraph color={"black"} fontSize={"2rem"} text={timestamp}></Paragraph>
        <Paragraph color={"black"} fontSize={"1rem"} text={datestamp}></Paragraph>
      </StyledDateTime>
    </StyledTimeBox>
  );
}

export default TimeBox;
