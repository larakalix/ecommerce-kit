import dynamic from "next/dynamic";
import { DefaultNav } from "@/components/layout/nav/types/DefaultNav";

const _components: any = {
    DefaultNav: dynamic<any>(() =>
        import("@/components/layout/nav/types/DefaultNav").then((m) => m.DefaultNav)
    ),
    CenteredLogo: dynamic<any>(() =>
        import("@/components/layout/nav/types/CenteredLogo").then((m) => m.CenteredLogo)
    ),
    MinimalSearch: dynamic<any>(() =>
        import("@/components/layout/nav/types/MinimalSearch").then((m) => m.MinimalSearch)
    ),
    Minimal: dynamic<any>(() =>
        import("@/components/layout/nav/types/Minimal").then((m) => m.Minimal)
    ),
};

const NavFactory = ({ type, props }: any) => {
    const Component = _components[type] ?? DefaultNav;

    return <Component {...props} />;
};

export default NavFactory;
