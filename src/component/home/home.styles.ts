import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding: 0px 30px;
`;

export const ProfileContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const ProfileTitle = styled.div`
  line-height: 140%;
  text-align: left;
`;

export const TitleHeader = styled.h1`
  color: #845ec2;
  font-weight: 700;
`;

export const TitleSubHeader = styled.h3`
  width: 22.5ch;
  animation: typing 2s steps(23), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;

  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

export const ProfileContent = styled.p`
  line-height: 130%;
  text-align: left;
`;

export const ProfileImg = styled.div`
  background-color: gray;
  max-width: 100%;
  width: 40%;
  height: 60%;
  margin: 30px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
