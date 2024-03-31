import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}

// Before making it a custom hook, the useEffect was inside the Modal.jsx
// We made this a custom hook here
// useEffect(
//   function () {
//     function handleClick(e) {
//       if (ref.current && !ref.current.contains(e.target)) {
//         console.log("Click outside");
//         close();
//       }
//     }

//     document.addEventListener("click", handleClick, true);

//     return () => document.removeEventListener("click", handleClick, true);
//   },
//   [close]
// );
