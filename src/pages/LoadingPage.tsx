import DotsSpinner from "../components/ui/DotsSpinner";
import MainContainer from "../components/ui/MainContainer";

export default function LoadingPage() {
  return (
    <MainContainer>
      <div className="absolute top-0 left-0 z-10000 flex h-screen w-screen items-center justify-center bg-slate-950/30 backdrop-blur-sm dark:bg-slate-100/30">
        <DotsSpinner size="large" />
      </div>
    </MainContainer>
  );
}
