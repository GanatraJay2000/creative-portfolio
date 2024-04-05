import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header({ className = "" }: { className?: string }) {
  return (
    <nav className={cn("my-10 flex items-center", className)}>
      <span className="grow text-5xl font-bold"></span>
      <div className="nav-links flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
