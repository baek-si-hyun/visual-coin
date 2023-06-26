import { Route, Routes } from "react-router-dom";
import CoinExchange from "./pages/coin_exchange/CoinExchange";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import CoinData from "./pages/coin_detail/CoinData";
import CoinMap from "./pages/coin_map/CoinMap";
import CoinComparison from "./pages/coin_comparison/CoinComparison";
import DataDetail from "./pages/coin_detail/DataDetail";
import Header from "./components/Header";
import { darkTheme, lightTheme } from "./theme";
import { useSelector } from "react-redux";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
  padding: 0 3vw;
`;
const AppInner = styled.div`
  width: 100%;
`;
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;  
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}

html{
  font-size: 100%;
  scroll-behavior: smooth;
}
body {
  line-height: 1;
  font-family: "Pretendard",sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0;
	color: ${(props) => props.theme.textColor};
  width: 100%;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color:inherit;
}
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
`;
function App() {
  const isDarkMode = useSelector(
    (state: { toggleMode: boolean }) => state.toggleMode
  );
  console.log(isDarkMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <AppInner>
          <Header />
          <Routes>
            <Route path="/coin-exchange" element={<CoinExchange />}></Route>
            <Route path="/coin-map" element={<CoinMap />}></Route>
            <Route path="/coin-detail" element={<CoinData />}></Route>
            <Route path="/:coinId" element={<DataDetail />}></Route>
            <Route path="/coin-comparison" element={<CoinComparison />}></Route>
          </Routes>
        </AppInner>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;