import React, { useState } from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";

const StyledSelectModal = styled.div`
  width: 450px;
  opacity: 1;
  min-height: 250px;
  background: #c4c4c4;
  color: black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  z-index: 2;
`;

const StyledModalTitle = styled.div`
  width: 100%;
  height: 30px;
  background: #e4e4e4;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledModalContent = styled.div`
  width: 60%;
  min-width: 270px;
  height: 220px;
  color: black;
`;

const StyledModalContentTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 60px;
  margin: 10px 0 15px 0;
`;

const StyledModalSelectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 25px;
`;

const StyledButtonGroup = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  float: right;
`;

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return { value, onChange };
};

function SelectModal({ changePowerState, unmountPowerScreen }) {
  const powerState = useInput(0);
  return (
    <StyledSelectModal>
      <StyledModalTitle>
        <Paragraph text={"Portfolio 종료"} color={"black"} margin={"0 0 0 10px"} fontSize={"0.9rem"}></Paragraph>
      </StyledModalTitle>
      <StyledModalContent>
        <StyledModalContentTitle>
          <Paragraph text={"Portfolio"} fontSize={"2.2rem"} color={"blue"}></Paragraph>
          <Paragraph text={"startMan edition"} fontSize={"0.9rem"} color={"black"} margin={"0 0 7px 10px"}></Paragraph>
        </StyledModalContentTitle>
        <StyledModalSelectBox>
          <Paragraph text={"원하는 작업을 선택하십시오."} color={"black"} fontSize={"0.8rem"}></Paragraph>
          <StyledSelect {...powerState}>
            <option value={0}>포트폴리오 종료</option>
            <option value={3}>다시 시작</option>
            <option value={4}>절전 모드</option>
          </StyledSelect>
        </StyledModalSelectBox>
        <StyledButtonGroup>
          <Button
            onclick={() => {
              changePowerState(Number(powerState.value));
            }}
            text={"확인"}
            border={"1px solid #555"}
            outline={"1px solid #555"}
            color={"black"}
            width={"60px"}
          ></Button>
          <Button
            onclick={unmountPowerScreen}
            text={"취소"}
            border={"1px solid #555"}
            outline={"1px solid #555"}
            color={"black"}
            width={"60px"}
          ></Button>
        </StyledButtonGroup>
      </StyledModalContent>
    </StyledSelectModal>
  );
}

export default SelectModal;
