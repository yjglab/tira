import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    /* box-sizing: border-box; */
  }
  .ant-btn-primary {
      background-color: #CCCCCC;
    border: none;
  }
  body {
    font-family: "넥슨Lv2고딕", "nexon-lv2-gothic";
    /* line-height: 1.5; */
  }
`;

export default GlobalStyle;
