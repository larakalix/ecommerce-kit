interface Props {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

export const ContentPanel = ({ children, className }: Props) => {
    return (
        <main className={className}>
            <h1>Wrapper title</h1>
            <hr />
            {children}
        </main>
    );
};
