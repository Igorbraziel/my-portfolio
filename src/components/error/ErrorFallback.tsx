import Button from "../ui/Button";

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
      <img
        className="absolute inset-0 z-[-1] h-full object-cover"
        src="error-bg.png"
        alt="Error Background image"
      />
      <p className="mt-40 px-4 text-lg font-bold md:text-xl lg:text-xl xl:text-2xl">
        ⚠️ {error?.message || "Undefined Error, please try again!"} ⚠️
      </p>
      <Button type="warning" size="large" onClick={resetErrorBoundary}>
        Reset
      </Button>
    </main>
  );
}
