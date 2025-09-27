import { motion } from "motion/react";

import Button from "../../Button";

import SendIcon from "@mui/icons-material/Send";

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
      <span>{isSubmitting ? submittingText : buttonText}</span>
      <motion.div
        className="ml-2 inline-block"
        variants={{
          hover: { x: 6 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <SendIcon fontSize="small" />
      </motion.div>
    </Button>
  );
}
