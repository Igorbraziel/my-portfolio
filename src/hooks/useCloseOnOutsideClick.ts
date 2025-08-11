import { useEffect, useRef } from "react";

interface useCloseOnOutsideClickProps {
  closeFn: () => void;
  listenCapturing?: boolean;
}

export default function useCloseOnOutsideClick({ closeFn, listenCapturing = true}: useCloseOnOutsideClickProps){
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: Event){
      if(ref.current && !ref.current.contains(e.target as Node)){
        closeFn();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing)

    return () => document.removeEventListener("click", handleClick, listenCapturing)
  }, [closeFn, listenCapturing])

  return { ref };
}