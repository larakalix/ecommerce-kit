import { NavProps, NavType } from "@/schemas/nav/NavProps";

export const __Navbar: NavProps = {
    type: NavType.CenteredLogo,
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
                        {
                            label: "January",
                            route: "/offers/3/1",
                            childs: [
                                { label: "April", route: "/offers/3/1" },
                                { label: "May", route: "/offers/3/2" },
                            ],
                        },
                        {
                            label: "February",
                            route: "/offers/3/2",
                            childs: [
                                {
                                    label: "Hola",
                                    route: "/offers/3/1",
                                    childs: [
                                        {
                                            label: "Nicaragua",
                                            route: "/offers/3/1",
                                        },
                                        {
                                            label: "Italia",
                                            route: "/offers/3/2",
                                        },
                                    ],
                                },
                                { label: "Adios", route: "/offers/3/2" },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
