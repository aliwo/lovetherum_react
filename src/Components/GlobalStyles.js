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
        font-family: 'YoonGothic';
    }
    body{
        padding-top:50px;
    }
    @font-face {
        font-family: 'YoonGothic';
        src: url("/yoon_gothic_340.ttf") format('truetype');
    }
    
`;

export default GlobalStyles;
