import Link from "next/link";

export default function Header() {
    return(
        <nav>
            <div>
                <ul className="header-button">
                    <Link href="/">
                    <li>Home</li>
                    </Link>
                    <Link href={"/portfolio"}>
                    <li>Portfolio</li>
                    </Link>
                    <Link href={"/contact"}>
                    <li>Contact</li>
                    </Link>
                    <Link href={"/about-us"}>
                    <li>About us</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}