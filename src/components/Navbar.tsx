import Link from "next/link";
import { useRouter } from "next/router";
import { DarkmodeSwitch } from "./DarkmodeSwitch";

type ItemProps = {
  href: string;
  name: string;
};

const NavItem = ({ href, name }: ItemProps) => {
  const router = useRouter();
  const isActive = router.pathname.split("/")[1] === href.substring(1);
  return (
    <Link href={href}>
      <a
        className={`px-3 py-1 rounded-md flex justify-center items-center text-black bg-white hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700  dark:text-white ${
          isActive ? "bg-slate-200 dark:bg-slate-700" : ""
        }`}
      >
        {name}
      </a>
    </Link>
  );
};

export function Navbar() {
  return (
    <div className="max-w-2xl mr-auto ml-auto mb-7">
      <nav className="flex items-center justify-between  min-w-full p-2">
        <div className="flex gap-2">
          <NavItem href="/" name="Home" />
          <NavItem href="/blog" name="Blog" />
        </div>
        <div className="ml-5 flex items-center">
          <DarkmodeSwitch />
        </div>
      </nav>
    </div>
  );
}
