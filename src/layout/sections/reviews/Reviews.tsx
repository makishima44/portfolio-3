import React from "react";
import { styled } from "styled-components";
import reviewPhoto from "./../../../assets/images/unsplash_6anudmpILw4.jpeg";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Contrainer } from "../../../components/Container";
import { theme } from "../../../styles/Themes";
import { font } from "../../../styles/Common";

type StatisticTitlePropsType = {
  fontSize: string;
  color?: string;
};

export const Reviews = () => {
  return (
    <StyledReviews>
      <Contrainer>
        {" "}
        <ReviewsWrapper>
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
              <StatisticsText fontSize="30px">
                Satisfaction
                <br />
                Clients
              </StatisticsText>
              <StatisticsText fontSize="50px" color="#676cdb">
                100 %
              </StatisticsText>
            </StatisticsBlock>
            <StatisticsBlock>
              <StatisticsText fontSize="30px">
                Clients On
                <br />
                Worldwide
              </StatisticsText>
              <StatisticsText fontSize="50px" color="#676cdb">
                + 80
              </StatisticsText>
            </StatisticsBlock>
            <StatisticsBlock>
              <StatisticsText fontSize="30px">Projects Done</StatisticsText>
              <StatisticsText fontSize="50px" color="#676cdb">
                743
              </StatisticsText>
            </StatisticsBlock>
          </StatisticsContainer>
        </ReviewsWrapper>
      </Contrainer>
    </StyledReviews>
  );
};

const StyledReviews = styled.section`
  padding: 100px 0;
  background: rgba(34, 42, 54, 0.95);
`;

const ReviewsWrapper = styled(FlexWrapper)`
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1118px) {
    gap: 40px;
    justify-content: center;
  }

  @media (max-width: 457px) {
    justify-content: left;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 924px) {
    justify-content: center;
  }
`;

const ReviewPhotoContainer = styled.div`
  width: 390px;
  height: 390px;

  @media (max-width: 457px) {
    width: 335px;
    height: 375px;
  }
`;

const ReviewPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ReviewTextContainer = styled.div`
  max-width: 490px;
  padding-top: 5px;
`;

const ReviewText = styled.p`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 180%;
  letter-spacing: 0%;
  color: ${theme.mainFont};

  @media (max-width: 924px) {
    padding-bottom: 20px;
  }
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

const StatisticsText = styled.span<StatisticTitlePropsType>`
  display: block;
  font-family: Playfair Display;
  font-weight: 700;
  line-height: 120%;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color || "#FFFFFF"};
`;
