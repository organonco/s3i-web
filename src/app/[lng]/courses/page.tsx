import Link from "../../../../node_modules/next/link";

export default function Page({ params: { lng } }) {
    return (
        <>
            <h1>Hi from second page!</h1>
            <Link href={`/${lng}`}>
                back
            </Link>
        </>
    )
}