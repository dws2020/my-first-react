import Link from "next/link";

export function Header() {
    return (
        <header>
            <Link href="/" className="font-medium">
                Index
            </Link>
            <Link href="/about">
                About
            </Link>
        </header>
    )
}