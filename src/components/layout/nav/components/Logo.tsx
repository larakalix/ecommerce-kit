/* eslint-disable @next/next/no-img-element */
export const Logo = ({ src }: { src: string }) => {
    return (
        <div>
            <img src={src} alt="Branch logo" className="max-w-[6rem]" />
        </div>
    );
};
