import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styles/Themes";

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
    <StyledContacts>
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
          <ContactLabel htmlFor="userEmail">Your email address:</ContactLabel>
          <ContactInput id="userEmail" type="email" />
        </ContactBlock>
        <ContactBlock>
          <ContactLabel htmlFor="userText">Your email address:</ContactLabel>
          <ContactInput as={"textarea"} id="userText" />
        </ContactBlock>
        <ContactButton>
          <a href="">Send</a>
          <Icon iconId="arrow-right" />
        </ContactButton>
      </ContactBlockForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
`;

const SocialContacts = styled.div``;

const SocialTitle = styled.h2`
  color: ${theme.mainFont};
`;

const SocialLinksBlock = styled.div`
  display: flex;
  gap: 50px;
`;

const ContactBlockForm = styled.form``;

const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInput = styled.input``;

const ContactLabel = styled.label`
  color: ${theme.mainFont};
`;

const ContactButton = styled.button``;
