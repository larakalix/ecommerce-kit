import { NavProps, NavType } from "@/schemas/nav/NavProps";

export const __Navbar: NavProps = {
    type: NavType.DefaultNav,
    logo: "https://static1.smartbear.co/swagger/media/images/logos/victorops-logo-clr.png",
    styles: null,
    items: [
        {
            label: "Home",
            route: "/",
            childs: [],
        },
        {
            label: "Store",
            route: "/store",
            childs: [],
        },
        {
            label: "Offers",
            route: "/",
            childs: [
                { label: "First", route: "/offers/1" },
                { label: "Second", route: "/offers/2" },
                {
                    label: "Three",
                    route: "/offers/3",
                    childs: [
                        { label: "January", route: "/offers/3/1" },
                        { label: "February", route: "/offers/3/2" },
                    ],
                },
            ],
        },
    ],
};
