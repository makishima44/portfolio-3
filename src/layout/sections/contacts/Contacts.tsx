import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styles/Themes";
import { Contrainer } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../styles/Common";

const SocialLinks = [
  {
    iconId: "dribble",
  },
  {
    iconId: "upwork2",
  },
  {
    iconId: "youtube",
  },
  {
    iconId: "linkedin",
  },
  {
    iconId: "github",
  },
];

export const Contacts = () => {
  return (
    <StyledContacts id="contact">
      <Contrainer>
        <ContactWrapper>
          {" "}
          <SocialContacts>
            <SocialTitle>
              Let’s
              <br />
              Connect
            </SocialTitle>

            <SocialLinksBlock>
              {" "}
              {SocialLinks.map((s, index) => {
                return (
                  <a key={index} href="#">
                    <Icon
                      iconId={s.iconId}
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                    />
                  </a>
                );
              })}
            </SocialLinksBlock>
          </SocialContacts>
          <ContactBlockForm>
            <ContactBlock>
              <ContactLabel htmlFor="userName">Your name:</ContactLabel>
              <ContactInput id="userName" type="text" />
            </ContactBlock>
            <ContactBlock>
              <ContactLabel htmlFor="userEmail">
                Your email address:
              </ContactLabel>
              <ContactInput id="userEmail" type="email" />
            </ContactBlock>
            <ContactBlock>
              <ContactLabel htmlFor="userText">
                Your email address:
              </ContactLabel>
              <ContactInput as={"textarea"} id="userText" />
            </ContactBlock>
            <ContactButton>
              <a href="">Send</a>
              <Icon
                iconId="arrow-right"
                height="30"
                width="30"
                viewBox="0 0 35 30"
              />
            </ContactButton>
          </ContactBlockForm>
        </ContactWrapper>
      </Contrainer>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  padding-top: 100px;
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
`;

const ContactWrapper = styled(FlexWrapper)`
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 967px) {
    justify-content: center;
    gap: 20px;
  }
`;

const SocialContacts = styled.div``;

const SocialTitle = styled.h2`
  margin-bottom: 50px;
  color: ${theme.mainFont};

  ${font({
    weight: 700,
    Fmax: 100,
    Fmin: 50,
    lineHeight: 1.2,
  })};
`;

const SocialLinksBlock = styled.div`
  display: flex;
  gap: 50px;
`;

const ContactBlockForm = styled.form`
  font-size: 30px;
  font-weight: 500;
  line-height: 120%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInput = styled.input`
  font-size: 16px;
  width: 500px;
  height: 60px;
  background-color: black;
  border: none;
  border-bottom: 1px solid ${theme.mainFont};
  color: ${theme.mainFont};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${theme.mainFont};
  }

  resize: none;

  @media (max-width: 530px) {
    max-width: 335px;
  }
`;

const ContactLabel = styled.label`
  color: ${theme.mainFont};
`;

const ContactButton = styled.button`
  width: 150px;
  font-size: 30px;
  font-weight: 500;
  line-height: 120%;
  background-color: transparent;
  color: #676cdb;

  a {
    color: #676cdb;
    padding-right: 45px;
  }

  &:hover {
    background-color: ${theme.mainFont};
    border-radius: 10px;
  }
`;
