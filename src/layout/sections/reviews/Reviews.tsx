import React from "react";
import { styled } from "styled-components";
import reviewPhoto from "./../../../assets/images/unsplash_6anudmpILw4.jpeg";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Reviews = () => {
  return (
    <StyledReviews>
      <FlexWrapper justify="space-between">
        <ReviewContainer>
          <ReviewPhotoContainer>
            <ReviewPhoto src={reviewPhoto} />
          </ReviewPhotoContainer>

          <ReviewTextContainer>
            <Icon iconId="quotation-marks" />
            <ReviewText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent{" "}
            </ReviewText>
            <Icon iconId="arrow-left" /> <Icon iconId="arrow-right" />
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

const ReviewPhotoContainer = styled.div``;

const ReviewPhoto = styled.img``;

const ReviewTextContainer = styled.div``;

const ReviewText = styled.p`
  max-width: 490px;
`;

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StatisticsBlock = styled.div``;

const StatisticsTitle = styled.span`
  display: block;
`;

const StatisticsNumber = styled.span``;
