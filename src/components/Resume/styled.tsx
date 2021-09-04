import styled from 'styled-components';

export const ResumeWrapper = styled.div`
  position: relative;
  padding: 10%;
`;

export const ResumeInnerWrapper = styled.div`
  margin: 3% 5%;
  padding: 2%;
  background-color: #141414;
  box-shadow: 8px 8px 8px black;
  @media (max-width: 1200px) {
    margin: 5% 2%;
  }
  @media (max-width: 600px) {
    margin: 4% 1%;
  }
`;

export const ItemWrapper = styled.div`
  display: inline-block;
  -webkit-filter: drop-shadow(3px 3px 2px gray);
  filter: drop-shadow(3px 3px 2px gray);
`;

export const CircleWrapper = styled.div`
  margin: 10px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  text-align: center;
  border: 1.5px solid #ebebeb;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const BasicInformation = styled.section`
  text-align: center;
  font-size: 16px;
  img {
    border-radius: 50%;
    margin: 1rem;
  }
`;

export const ClearMobile = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const SocialInformation = styled.section`
  font-size: 20px;
  text-align: center;
  a {
    padding: 0 6px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  border: 1px solid ${({ theme: { color } }) => color};
  border-radius: 4px;
  outline: 0;
`;

export const NameTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const NameSmallTitle = styled.div`
  margin: 10px;
  font-size: 30px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const NameEmail = styled.div`
  margin: 10px;
  font-size: 15px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const PrintTitle = styled.div`
  font-size: 15px;
  font-weight: 800;

  margin: 5px;
`;

export const PostContent = styled.section`
  padding: 1em 1em 4em;
  line-height: 2em;
  font-weight: 800;

  h1 {
    margin-top: 40px;
    font-size: 20px;
    font-weight: 800;
    color: black;
    background: white;
    padding: 1%;
  }
  h2 {
    margin-top: 20px;
    font-size: 28px;
    font-weight: 800;
  }
  h3 {
    margin-top: 20px;
    font-size: 24px;
  }
  h4 {
    margin-top: 40px;
    font-size: 21px;
  }
  h5 {
    margin-top: 20px;
    font-size: 18px;
  }
  p {
    margin-top: 10px;
    font-size: 16px;
  }

  @media (max-width: 1000px) {
    padding: 0 20px 20px 20px;
    line-height: 2em;
    color: white;

    h1 {
      margin-top: 4px;
      margin-bottom: 2px;
      font-size: 15px;
      font-weight: 800;
    }

    h2 {
      margin-top: 2px;
      font-size: 20px;
    }
    h3 {
      margin-top: 4px;
      font-size: 18px;
    }
    h4 {
      margin-top: 4px;
      font-size: 16px;
    }
    h5 {
      margin-top: 4px;
      font-size: 14px;
    }
    p {
      margin-top: 2px;
      font-size: 12px;
      font-weight: 100;
    }
    li {
      margin-top: 2px;
      font-size: 12px;
      margin-left: 10px;
      font-weight: 100;
    }
    blockquote {
      line-height: 1.2em;
      color: #aaa;
      font-size: 12px;
    }
    pre {
      font-size: 12px;
    }
    table {
      margin: 2px;
      background: #434343;
    }
    th {
      border: 2px solid white;
      color: white;
      padding: 2px;
      font-size: 10px;
    }
    tr {
      border: 2px solid white;
      color: white;
      padding: 2px;
      font-size: 10px;
    }
    td {
      border: 2px solid white;
      color: white;
      padding: 2px;
      font-size: 10px;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  .innerIcon {
  }
`;
