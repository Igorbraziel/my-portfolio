import { Toaster } from "react-hot-toast";
import { useDarkMode } from "../../hooks/useDarkMode";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function CustomToaster() {
  const { isDark } = useDarkMode();
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 5000,
          style: {
            background: isDark
              ? "oklch(62.7% 0.194 149.214)"
              : "oklch(44.8% 0.119 151.328)",
            color: isDark
              ? "oklch(26.6% 0.065 152.934)"
              : "oklch(96.2% 0.044 156.743)",
          },
        },
        error: {
          duration: 5000,
          style: {
            background: isDark
              ? "oklch(57.7% 0.245 27.325)"
              : "oklch(44.4% 0.177 26.899)",
            color: isDark
              ? "oklch(25.8% 0.092 26.042)"
              : "oklch(93.6% 0.032 17.717)",
          },
        },
        style: {
          fontSize: isLaptop ? "32px" : isTablet ? "24px" : "16px",
          maxWidth: "500px",
          padding: isLaptop
            ? "24px 32px"
            : isTablet
              ? "20px 28px"
              : "16px 24px",
        },
      }}
    />
  );
}
