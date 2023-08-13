import classNames from "classnames";
import { useState } from "react";

export function App() {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    const likeButton = document.querySelector(".like-module") as HTMLDivElement;
    if (!likeButton) return;
    if (likeButton.style.backgroundPosition !== "") {
      likeButton.style.backgroundPosition = "";
      setIsClicked(false);
      return;
    }
    setIsClicked(true);
    let currentPosition = 0;
    const interval = setInterval(() => {
      if (currentPosition > -2000) {
        currentPosition -= 160;
        likeButton.style.backgroundPosition = `${currentPosition}px 0`;
      } else {
        clearInterval(interval);
      }
    }, 55);
  };

  return (
    <div className="h-full w-full flex items-center justify-center ">
      <div
        className={classNames(
          "like-module",
          isClicked ? "have-click" : "un-click"
        )}
        onClick={onClick}
      ></div>
    </div>
  );
}
