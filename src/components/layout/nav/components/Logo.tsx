/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface Props {
    src: string;
    href?: string;
}

export const Logo = ({ src, href = "/" }: Props) => {
    return (
        <Link href={href}>
            <a className="px-8 py-2">
                <img src={src} alt="Branch logo" className="max-w-[6rem]" />
            </a>
        </Link>
    );
};
