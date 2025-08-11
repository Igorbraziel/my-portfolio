import Button from "../ui/Button";
import errorBg from "../../../public/error-bg.png";

interface ErrorFallbackProps {
  error: Error | undefined;
  resetErrorBoundary: () => void;
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <main className="relative flex min-h-screen flex-col items-center gap-5 p-3 text-center sm:gap-6 sm:p-4 md:gap-7 md:p-5 lg:gap-8 lg:p-6 xl:gap-10 xl:p-7">
      <img className="absolute inset-0 h-full z-[-1] object-cover" src={errorBg} alt="Error Background image" />
      <p className="text-lg font-bold md:text-xl lg:text-xl xl:text-2xl px-4 mt-40">
        ⚠️ {error?.message || "Undefined Error, please try again!"} ⚠️
      </p>
      <Button type="warning" size="large" onClick={resetErrorBoundary}>
        Reset
      </Button>
    </main>
  );
}
