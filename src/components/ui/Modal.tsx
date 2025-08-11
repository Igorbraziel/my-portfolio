import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import { createContext } from "react";
import useCloseOnOutsideClick from "../../hooks/useCloseOnOutsideClick";
import { createPortal } from "react-dom";
import ButtonIcon from "./ButtonIcon";
import CloseIcon from "@mui/icons-material/Close";

function Overlay({ children }: PropsWithChildren) {
  return (
    <div className="fixed top-0 left-0 z-1000 h-screen w-full bg-gray-400/60 backdrop-blur-xs dark:bg-gray-800/80">
      {children}
    </div>
  );
}

interface StyledModalProps {
  children: React.ReactNode;
}

const StyledModal = forwardRef<HTMLDivElement, StyledModalProps>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="fixed top-[1%] left-[1%] divide-y divide-neutral-400/80 rounded-lg border border-gray-800 bg-gray-200 p-4 text-gray-950 shadow shadow-gray-900 dark:divide-neutral-900/80 dark:bg-gray-700 dark:text-gray-50"
      >
        {children}
      </div>
    );
  },
);

interface ModalContextProps {
  openName: string;
  open: (arg0: string) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  openName: "",
  open: () => {},
  close: () => {},
});

function Modal({ children }: PropsWithChildren) {
  const [openName, setOpenName] = useState("");

  return (
    <ModalContext.Provider
      value={{ openName, open: setOpenName, close: () => setOpenName("") }}
    >
      {children}
    </ModalContext.Provider>
  );
}

interface ModalContentProps {
  onClose: () => void;
}

interface WindowProps {
  name: string;
  children: React.ReactElement<ModalContentProps>;
}

function CloseContainer({ children }: PropsWithChildren) {
  return <div className="flex justify-end">{children}</div>;
}

function Window({ children, name }: PropsWithChildren<WindowProps>) {
  const { openName, close } = useContext(ModalContext);

  const { ref } = useCloseOnOutsideClick({ closeFn: close });

  if (openName !== name) return null;

  if (!isValidElement(children)) {
    throw new Error("Invalid children element");
  }

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <CloseContainer>
          <ButtonIcon size="small" onClick={close}>
            <CloseIcon />
          </ButtonIcon>
        </CloseContainer>
        <div>{cloneElement(children, { onClose: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
}

interface OpenChildrenProps {
  onClick: () => void;
}

interface OpenProps {
  children: React.ReactElement<OpenChildrenProps>;
  windowName: string;
}

function Open({ children, windowName }: OpenProps) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      open(windowName);
    },
  });
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
