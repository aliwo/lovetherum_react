import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
        font-family:'Noto Serif KR','Times New Roman', Times, serif;
    }
    body{
        padding-top:50px;
    }
`;

export default GlobalStyles;
