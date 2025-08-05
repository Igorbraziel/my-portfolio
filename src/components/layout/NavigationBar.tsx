import LinkList from "../ui/LinkList";

export default function NavigationBar() {
  return (
    <nav className="md:col-start-1 md:row-start-1 flex w-full items-center justify-center">
      <LinkList />
    </nav>
  );
}
