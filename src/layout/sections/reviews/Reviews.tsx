import React from "react";
import { styled } from "styled-components";
import reviewPhoto from "./../../../assets/images/unsplash_6anudmpILw4.jpeg";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Contrainer } from "../../../components/Container";
import { theme } from "../../../styles/Themes";
import { font } from "../../../styles/Common";

export const Reviews = () => {
  return (
    <StyledReviews>
      <Contrainer>
        {" "}
        <FlexWrapper justify="space-between">
          <ReviewContainer>
            <ReviewPhotoContainer>
              <ReviewPhoto src={reviewPhoto} />
            </ReviewPhotoContainer>

            <ReviewTextContainer>
              <Icon iconId="quotation-marks" />
              <ReviewText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent{" "}
              </ReviewText>
              <ReviewLink>
                <Icon
                  iconId="arrow-left"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                />
              </ReviewLink>
              <ReviewLink>
                {" "}
                <Icon
                  iconId="arrow-right"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                />
              </ReviewLink>
            </ReviewTextContainer>
          </ReviewContainer>
          <StatisticsContainer>
            <StatisticsBlock>
              <StatisticsTitle>
                Satisfaction
                <br />
                Clients
              </StatisticsTitle>
              <StatisticsNumber>100 %</StatisticsNumber>
            </StatisticsBlock>
            <StatisticsBlock>
              <StatisticsTitle>
                Clients On
                <br />
                Worldwide
              </StatisticsTitle>
              <StatisticsNumber>+ 80</StatisticsNumber>
            </StatisticsBlock>
            <StatisticsBlock>
              <StatisticsTitle>Projects Done</StatisticsTitle>
              <StatisticsNumber>743</StatisticsNumber>
            </StatisticsBlock>
          </StatisticsContainer>
        </FlexWrapper>
      </Contrainer>
    </StyledReviews>
  );
};

const StyledReviews = styled.section`
  padding: 100px 0;
  background: rgba(34, 42, 54, 0.95);
`;

const ReviewContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const ReviewPhotoContainer = styled.div`
  width: 390px;
  height: 390px;
`;

const ReviewPhoto = styled.img`
  width: 100%;
  height: 100%;
`;

const ReviewTextContainer = styled.div`
  width: 490px;
  height: 390px;
  padding-top: 45px;
`;

const ReviewText = styled.p`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 180%;
  letter-spacing: 0%;
  color: ${theme.mainFont};
`;

const ReviewLink = styled.a`
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StatisticsBlock = styled.div``;

const StatisticsTitle = styled.span`
  display: block;
  font-family: Playfair Display;
  font-size: 30px;
  font-weight: 700;
  line-height: 120%;
  color: ${theme.mainFont};
`;

const StatisticsNumber = styled.span`
  font-family: Playfair Display;
  font-size: 50px;
  font-weight: 700;
  line-height: 120%;
  color: #676cdb;
`;
