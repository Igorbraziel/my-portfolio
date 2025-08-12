import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useContext,
  useEffect,
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
  position?: Position;
}

const StyledModal = forwardRef<HTMLDivElement, StyledModalProps>(
  ({ children, position }, ref) => {
    const positionStyle =
      position?.x && position?.y
        ? `${position.y}px ${position.x}px`
        : "50% 50%";

    console.log(position, positionStyle);

    return (
      <div
        ref={ref}
        style={{
          top: positionStyle.split(" ").at(0),
          left: positionStyle.split(" ").at(1),
        }}
        className={
          "fixed divide-y divide-neutral-400/80 rounded-lg border border-gray-800 bg-gray-200 p-4 text-gray-950 shadow shadow-gray-900 dark:divide-neutral-900/80 dark:bg-gray-700 dark:text-gray-50"
        }
      >
        {children}
      </div>
    );
  },
);

interface Position {
  x: number | undefined;
  y: number | undefined;
}


interface ModalContextProps {
  openName: string;
  open: (arg0: string) => void;
  close: () => void;
  position: Position;
  setPosition: (agr0: Position) => void;
}

const ModalContext = createContext<ModalContextProps>({
  openName: "",
  open: () => {},
  close: () => {},
  position: { x: undefined, y: undefined },
  setPosition: () => {},
});

function Modal({ children }: PropsWithChildren) {
  const [openName, setOpenName] = useState("");
  const [position, setPosition] = useState<Position>({
    x: undefined,
    y: undefined,
  });

  return (
    <ModalContext.Provider
      value={{
        openName,
        open: setOpenName,
        close: () => setOpenName(""),
        position,
        setPosition,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}


function CloseContainer({ children }: PropsWithChildren) {
  return <div className="flex justify-end">{children}</div>;
}

interface WindowContentProps {
  onClose: () => void;
}

interface WindowProps {
  name: string;
  children: React.ReactElement<WindowContentProps>;
}

function Window({ children, name }: PropsWithChildren<WindowProps>) {
  const { openName, close, position, setPosition } = useContext(ModalContext);

  const { ref } = useCloseOnOutsideClick({ closeFn: close });

  useEffect(() => {
    const handleScroll = () => {
      setPosition({ x: undefined, y: undefined });
      close();
    };

    document.addEventListener("scroll", handleScroll, true);

    return () => document.removeEventListener("scroll", handleScroll, true);
  }, [setPosition, close]);

  if (openName !== name) return null;

  if (!isValidElement(children)) {
    throw new Error("Invalid children element");
  }

  return createPortal(
    <Overlay>
      <StyledModal ref={ref} position={position}>
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
  onClick: (() => void) | ((e: Event) => void);
}

interface OpenProps {
  children: React.ReactElement<OpenChildrenProps>;
  windowName: string;
}

function Open({ children, windowName }: OpenProps) {
  const { open, setPosition } = useContext(ModalContext);

  function handleClick(e: Event) {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const rect = target?.closest("button")?.getBoundingClientRect();
    if (rect) {
      setPosition({
        x: rect.x + rect.x / 2,
        y: rect.y,
      });
    }

    open(windowName);
  }

  return cloneElement(children, {
    onClick: handleClick,
  });
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
