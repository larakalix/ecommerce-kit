import "../styles/globals.scss";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import ThemeContext from "@/context/ThemeContext";
import useTheme from "@/hooks/useTheme";
import { Navbar } from "@/components/layout/nav/Navbar";
import { __Navbar } from "src/data/nav";

const { Provider } = ThemeContext;

interface Props extends AppProps {
    data: any;
}

function MyApp({ data, Component, pageProps }: Props) {
    const { theme, navType, changeTheme, changeNavType } = useTheme();

    return (
        <Provider value={{ theme, navType, changeTheme, changeNavType }}>
            <Navbar nav={data} />

            <div className={`${theme} max-w-[80%] m-auto`}>
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
    const appProps = await App.getInitialProps(ctx);

    return { data: __Navbar, ...appProps };
};

export default MyApp;
