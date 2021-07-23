import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: #101522;
`;

export const FooterWrap = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: min(90%, 900px);
`;

export const SocialMediaLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  font-weight: bold;
  margin-bottom: 0.5em;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 1em;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconsLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    > * {
      flex-basis: 100%;
    }
    > * + * {
      margin-left: 2em;
    }
  }
`;

export const Text = styled.h4`
  display: inline-block;
  font-size: 16px;
  color: #fff;
  padding: 10px 24px;
  text-align: center;
  max-width: 300px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Term = styled.div`
  width: 100%;
`;
