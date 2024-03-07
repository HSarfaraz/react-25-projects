// import "./App.css";
import ChangeName from "./ChangeName";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";

function App() {
  return (
    <>
     {/*  <ChangeName />
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={5} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreData /> */}
      <TreeView />
    </>
  );
}

export default App;
