import styled from "styled-components";
export const GridDisplace = styled.div`
  &.grid-displace {
    width: min(100%, 1400px);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      "img img inicio inicio ."
      "img img inicio inicio ."
      "img img . . ."
      "img img letters letters letters";
    gap: 20px;
  }
`;
export const GallowsImg = styled.div`
  grid-area: img;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  img {
    height: 90%;
  }
`;
export const StartBtn = styled.div`
  grid-area: inicio;
  display: flex;
  align-items: center;
  justify-content: end;
  button {
    border: 0px solid transparent;
    width: 200px;
    height: 60px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    background: #27ae60;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      font-size: 21px;
      border: 3px solid yellowgreen;
    }
  }
`;
export const AnswerProgression = styled.div`
  grid-area: letters;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 50px;
    cursor: pointer;
    transition: all 0.1s ease-in;
  }
  h4.lose {
    color: #ff0000;
  }
  h4.win {
    color: #27ae60;
  }
  h4.black {
    color: #000;
  }
  h4::after {
    content: " ";
    white-space: pre;
  }
  /* h4:hover {
    background-color: #00000011;
    border-radius: 6px;
    padding: 8px;
    padding-bottom: 16px;
  } */
`;
