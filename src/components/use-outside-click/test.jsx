import { useRef, useState } from "react";
import UseOutsideClick from ".";
import "./styles.css";

export default function UseOutsideClickTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();

  UseOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="outside-click-container ">
      {showContent ? (
        <div ref={ref}>
          <h1>This is random content</h1>
          <p>
            Please click outside of this to close this. Its close if you click
            inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
