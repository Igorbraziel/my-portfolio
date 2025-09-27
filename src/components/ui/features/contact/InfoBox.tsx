import type { PropsWithChildren } from "react";

export default function InfoBox({ children}: PropsWithChildren){
  return <div className="backdrop-blur-[1px] flex flex-col">
    {children}
  </div>
}