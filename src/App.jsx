// import "./App.css";
import ChangeName from "./ChangeName";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabsTest from "./components/custom-tabs/tab-test";
import FeatureFlag from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import SearchAutoComplete from "./components/search-auto-complete-with-api";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOutsideClickTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

function App() {
  return (
    <>
      {/* <ChangeName /> */}
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={5} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabsTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutoComplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseOutsideClickTest /> */}
      {/* <UseWindowResizeTest /> */}
      <ScrollToTopAndBottom />
    </>
  );
}

export default App;
