import Link from "next/link"

export const Navigation = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link href="/">Homepage</Link>
                </li>
                <li>
                    <Link href="/todos/page">Gå til gjøremålene for dagen</Link>
                </li>
                <li>
                    <Link href="/todos/create">Legge til gjøremål</Link>
                </li>
            </ul>
        </nav>
    )
}