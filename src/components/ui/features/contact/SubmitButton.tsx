import { motion } from "motion/react";

import Button from "../../Button";

import SendIcon from "@mui/icons-material/Send";
import DotsSpinner from "../../DotsSpinner";

interface SubmitButtonProps {
  isSubmitting: boolean;
  submittingText: string;
  buttonText: string;
}

export default function SubmitButton({
  isSubmitting,
  submittingText,
  buttonText,
}: SubmitButtonProps) {
  return (
    <Button type="submit" size="medium" disabled={isSubmitting}>
      <div className={`flex items-center ${isSubmitting ? "gap-3 lg:gap-4" : ""}`}>
        <span className="text-sm md:text-base lg:text-lg">
          {isSubmitting ? submittingText : buttonText}
        </span>
        {!isSubmitting ? (
          <motion.div
            className="ml-2 inline-block"
            variants={{
              hover: { x: 6 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <SendIcon fontSize="small" />
          </motion.div>
        ) : (
          <div className="mb-5">
            <DotsSpinner />
          </div>
        )}
      </div>
    </Button>
  );
}
