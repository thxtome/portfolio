import React from 'react';
import styled from 'styled-components';
import Paragraph from '../common/Paragraph';
import SkillCard from './SkillCard';

import HtmlIcon from '../../svg/skills/html.svg';
import CssIcon from '../../svg/skills/css.svg';
import JsIcon from '../../svg/skills/js.svg';
import JqueryIcon from '../../svg/skills/jquery.svg';
import ReactIcon from '../../svg/skills/react.svg';
import JavaIcon from '../../svg/skills/java.svg';
import SpringIcon from '../../svg/skills/spring.svg';
import MysqlIcon from '../../svg/skills/mysql.svg';
import LinuxIcon from '../../svg/skills/linux.svg';
import NginxIcon from '../../svg/skills/nginx.svg';
import AwsIcon from '../../svg/skills/aws.svg';
import GitIcon from '../../svg/skills/git.svg';

const StyledContentSection = styled.section`
  width: 100%;
  max-width: 1120px;
  height: max-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: ${props => (props.isMobileView ? '30px 10px 0 10px' : '30px 15px 30px 15px')};
`;

const StyledSectionTitle = styled.title`
  width: 100%;
  max-width: 1120px;
  font-family: 'Do Hyeon';
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
  padding: ${props => (props.isMobileView ? '15px 0 0 0' : '30px 5px 0 5px')};
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const StyledArticleContentBox = styled.article`
  width: ${props => (props.width ? props.width : '50%')};
  height: max-content;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 240px;
  margin-bottom: 10px;
`;

const StyledSkillsBox = styled.div`
  max-width: 340px;
  min-width: 240px;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const StyledSkillsTitle = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 0 10px 10px 10px;
`;

const frontEnd = [
  { icon: HtmlIcon, title: 'HTML', text: '시맨틱 태그를 이해하고 레이아웃을 구성할 수 있습니다.' },
  { icon: CssIcon, title: 'CSS', text: '반응형 웹을 구현할 수 있습니다.' },
  { icon: JsIcon, title: 'JS', text: 'ES6 문법을 사용할 수 있으며 함수형 프로그래밍을 할 수 있습니다.' },
  { icon: JqueryIcon, title: 'JQUERY', text: '라이브러리를 사용하여 DOM 객체를 조작할 수 있습니다.' },
  { icon: ReactIcon, title: 'REACT', text: '각종 라이브러리와 함수형 컴포넌트를 사용할 수 있습니다.' },
];

const backEnd = [
  { icon: JavaIcon, title: 'JAVA', text: '객체지향적 사고를 할 수 있습니다. JAVA8 문법을 사용할 수 있습니다.' },
  {
    icon: SpringIcon,
    title: 'SPRING BOOT',
    text: 'REST API 서버를 구축할 수 있다. Security, Web Socket등 라이브러리를 사용할 수 있습니다.',
  },
  {
    icon: MysqlIcon,
    title: 'MYSQL',
    text: 'Join을 사용하여 SQL을 작성할 수 있으며 프로시져 및 트리거를 사용할 수 있습니다.',
  },
];

const devOps = [
  { icon: LinuxIcon, title: 'LINUX', text: '기본 명령어를 사용할 수 있으며 웹서버를 구성할 수 있습니다.' },
  {
    icon: NginxIcon,
    title: 'NGINX',
    text: '리버스 프록시를 구성할 수 있으며 ssl 인증서로 https 설정을 할 수 있습니다.',
  },
  {
    icon: AwsIcon,
    title: 'AWS',
    text: 'ec2를 사용하여 서버를 구성할 수 있고 rds로 데이터베이스를 구성할 수 있습니다.',
  },
  {
    icon: GitIcon,
    title: 'GIT',
    text: '버전관리를 할 수 있으며, pr 과 review를 할 수 있습니다.',
  },
];

const skiils = [
  { value: frontEnd, title: '#Front-End' },
  { value: backEnd, title: '#Back-End' },
  { value: devOps, title: '#Dev-ops' },
];

const Skills = ({ isMobileView, refs }) => {
  return (
    <StyledContentSection isMobileView={isMobileView} ref={refs}>
      <StyledSectionTitle>
        <Paragraph text={'SKILLS'} color={'black'} fontSize={'1.6rem'}></Paragraph>
        <StyledHr />
      </StyledSectionTitle>
      <StyledArticle isMobileView={isMobileView}>
        {skiils.map(({ title, value }, index) => (
          <StyledArticleContentBox width={'33%;'} key={index}>
            <StyledSkillsBox>
              <StyledSkillsTitle>
                <Paragraph text={title} color={'black'} fontWeight={'bold'}></Paragraph>
              </StyledSkillsTitle>
              {value.map((ele, index) => (
                <SkillCard {...ele} key={index}></SkillCard>
              ))}
            </StyledSkillsBox>
          </StyledArticleContentBox>
        ))}
      </StyledArticle>
    </StyledContentSection>
  );
};

export default Skills;
