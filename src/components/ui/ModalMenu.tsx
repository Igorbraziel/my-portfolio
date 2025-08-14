import MenuButton from "./MenuButton";
import Modal from "./Modal";
import SideNavigation from "../layout/SideNavigation";

export default function ModalMenu() {
  return (
    <Modal>
      <Modal.Open windowName="menu">
        <MenuButton />
      </Modal.Open>
      <Modal.Window name="menu">
        <SideNavigation />
      </Modal.Window>
    </Modal>
  );
}
