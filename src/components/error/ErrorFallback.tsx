interface ErrorFallbackProps {
  error: Error | undefined;
  resetErrorBoundary: () => void;
}

export default function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps){
  return <main>
    <p>{error?.message || "Error"}</p>
    <button onClick={resetErrorBoundary}>Reset</button>
  </main>
}