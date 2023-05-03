import Link from "next/link";
import { tv } from 'tailwind-variants';

const header = tv({
  base: "w-full border-solid divide-slate-700",
  variants: {

  }

}
)

export function Header() {
  return (
    <header className={header()}>
      <Link href="/" className="text-3xl font-medium">
        <span className="hover:text-blue-700">Index</span>
      </Link>
      <Link href="/about" className="text-3xl font-medium ">
        About
      </Link>
    </header>
  )
}