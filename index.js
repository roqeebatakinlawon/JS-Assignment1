import { computePosition } from "https://cdn.skypack.dev/@floating-ui/dom";

const dialog = document.getElementById("dialog");
const above = document.getElementById("above");
const below = document.getElementById("below");
const right = document.getElementById("right");

function positionElements() {
  computePosition(dialog, above, {
    placement: "top-start",
  }).then(({ x, y }) => {
    Object.assign(above.style, {
      top: `${y}px`,
      left: `${x}px`,
    });
  });

  computePosition(dialog, below, {
    placement: "bottom-start",
  }).then(({ x, y }) => {
    Object.assign(below.style, {
      top: `${y}px`,
      left: `${x}px`,
    });
  });

  computePosition(dialog, right, {
    placement: "right",
  }).then(({ x, y }) => {
    Object.assign(right.style, {
      top: `${y}px`,
      left: `${x}px`,
    });
  });
}

// Initial positioning
positionElements();

// Re-position on window resize
window.addEventListener("resize", positionElements);

// Ensure re-positioning on any significant layout change
new ResizeObserver(positionElements).observe(document.body);
