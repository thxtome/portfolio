import React, { useState, useRef } from "react";
import styled from "styled-components";
import ContentFooter from "../common/ContentFooter";
import ContentHeader from "../common/ContentHeader";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";

import DoublecomeSvg from '../../svg/project/doublecome.svg';
import EgaccountSvg from '../../svg/project/egaccount.svg';
import MomatoSvg from '../../svg/project/momato.svg';

const StyledProject = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  background: #eaeaea;
`;

const StyledProjectContent = styled.div`
  width: 90%;
  max-width: 1120px;
  height: max-content%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  top: -50px;
  background: #fff;
`;

const StyledContentSection = styled.section`
  width: 100%;
  max-width: 1120px;
  height: max-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: ${(props) => (props.isMobileView ? "30px 10px 0 10px" : "10px 15px 30px 15px")};
`;

const StyledSectionTitle = styled.title`
  width: 100%;
  max-width: 1120px;
  font-family: "Do Hyeon";
  height: max-content;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const StyledHr = styled.hr`
  width: 70%;
  height: 1px;
  background: black;
  align-self: center;
`;

const StyledArticle = styled.article`
  width: 100%;
  max-width: 1120px;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  padding: ${(props) => (props.isMobileView ? "15px 0 0 0" : "30px 5px 0 5px")};
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const StyledArticleContentBox = styled.article`
  width: ${(props) => (props.width ? props.width : "50%")};
  height: max-content;
  display: ${(props) => (props.display ? props.display : "flex")};
  box-sizing: border-box;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-width: 240px;
`;

const StyledProjectImg = styled.img`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  max-height: 300px;
`;

const StyledButtonGroup = styled.div`
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: ${props => (props.isMobileView ? 'space-around' : 'space-between')};
  margin-top: 10px;
`;

const doublecomeText = [
  '중고 물품을 어떻게 하면 더 비싸게 팔 수 있을까에서 ',
  '시작된 중고 경매 사이트입니다.',
  null,
  '웹개발은 Java Spring을 사용하였고,  방송은 Client서버는 NodeJs, ',
  '중계 서버는 KurentoMediaServer와 coturn을 이용하여  직접 구성했습니다.',
  null,
  '초기 개발 설정과 페이징, 방송기능을 맡아서 작업했습니다. ',
  null,
];

const egaccountText = [
  '건설기계회사의 ERP입니다.',
  '회사의 매출, 매입 관리부터 회계관리와 근태관리까지 통합하여 관리하면 좋겠다는 생각에 시작했습니다. ',
  null,
  '백엔드는 Spring boot를 사용했고 프론트는 JSP를 사용했습니다.',
  '프론트엔드와 백엔드 모두 혼자 작업했습니다.',
  null,
  '필요한 회계항목을 입력하고 차변과 대변을 한번에 입력할 수 있게 ',
  '만든 단축전표가 핵심 항목입니다.',
  null,
];

const momatoText = [
  '뽀모도로 기법을 이용한 타이머입니다.',
  '작업을 만들고 완료하면 통계를 내고 매달 일정개수 이상이면 등급을 올려줍니다.',
  null,
  '백엔드는 Spring boot를 사용했고 프론트는 React를 사용했습니다.',
  '타이머부분은 websocket을 사용하여 예상치 못한 종료에도 데이터를 보호할 수 있습니다.',
  null,
  '로그인은 jwt를 이용해서 구현하였고 PWA로 만들어서 비로그인시에는 오프라인으로도 이용이 가능합니다.',
  null,
];

const BtnStyle = {
  youtube: {
    text: 'youtube',
    width: '100px',
    height: '40px',
    background: 'red',
    borderRadius: '5px',
    hover: '#bb1919',
  },
  github: {
    text: 'github',
    width: '100px',
    height: '40px',
    background: '#363d44',
    borderRadius: '5px',
    hover: '#000',
  },
  serivce: {
    text: 'serivce',
    width: '100px',
    height: '40px',
    background: '#ff8800',
    borderRadius: '5px',
    hover: '#d67405',
  },
};

const doublecomeBtns = [
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=j1gPvZifyS0', style: BtnStyle.youtube },
  { type: 'github', url: 'https://github.com/thxtome/BitCampFirtstTeam', style: BtnStyle.github },
];

const egaccountBtns = [];

const momatoBtns = [
  { type: 'serivce', url: 'https://www.momato.net', style: BtnStyle.serivce },
  { type: 'github', url: 'https://github.com/thxtome/momato', style: BtnStyle.github },
];

const project = [
  {
    title: 'DOUBLECOME',
    img: DoublecomeSvg,
    period: '중고 경매 사이트 2019-09 ~ 2020-01',
    text: doublecomeText,
    btns: doublecomeBtns,
  },
  {
    title: 'EGACCOUNT',
    img: EgaccountSvg,
    period: '건설기계 ERP 2020-02 ~ 2020-07',
    text: egaccountText,
    btns: egaccountBtns,
  },
  {
    title: 'MOMATO',
    img: MomatoSvg,
    period: '뽀모로도 타이머 웹앱 2020-04 ~ 2020-07',
    text: momatoText,
    btns: momatoBtns,
  },
];

const Project = ({ isMobileView }) => {
  project[0].ref = useRef();
  project[1].ref = useRef();
  project[2].ref = useRef();
  const refs = [project[0].ref, project[1].ref, project[2].ref];
  return (
    <StyledProject>
      <ContentHeader
        text={'Project'}
        contents={project.map(project => {
          return project.title;
        })}
        refs={refs}
        isMobileView={isMobileView}
      ></ContentHeader>
      <StyledProjectContent>
        {project.map(({ title, img, period, text, btns, ref }, index) => {
          return (
            <StyledContentSection ref={ref} key={index}>
              <StyledSectionTitle>
                <Paragraph text={title} color={'black'} fontSize={'1.6rem'}></Paragraph>
                <StyledHr />
              </StyledSectionTitle>
              <Paragraph
                text={period}
                color={'black'}
                fontSize={isMobileView ? '0.8rem' : '1rem'}
                width={'100%'}
                textAlign={'start'}
              ></Paragraph>
              <StyledArticle isMobileView={isMobileView}>
                <StyledArticleContentBox width={'50%;'}>
                  <StyledProjectImg src={img}></StyledProjectImg>
                </StyledArticleContentBox>
                <StyledArticleContentBox width={'50%;'} display={'block'}>
                  {text.map((textEle, index) => {
                    if (textEle === null) {
                      return <br key={index} />;
                    }
                    return (
                      <Paragraph
                        text={textEle}
                        color={'black'}
                        fontSize={isMobileView ? '0.8rem' : '1rem'}
                        margin={'0 0 5px 0'}
                        textAlign={'start'}
                        key={index}
                      ></Paragraph>
                    );
                  })}
                  <StyledButtonGroup isMobileView={isMobileView}>
                    {btns.map(({ type, url, style }, index) => {
                      return (
                        <Button
                          key={index}
                          text={type}
                          {...style}
                          onclick={() => {
                            window.open(url);
                          }}
                        ></Button>
                      );
                    })}
                  </StyledButtonGroup>
                </StyledArticleContentBox>
              </StyledArticle>
            </StyledContentSection>
          );
        })}
      </StyledProjectContent>
      <ContentFooter></ContentFooter>
    </StyledProject>
  );
};

export default Project;
