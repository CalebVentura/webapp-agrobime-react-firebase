export interface MenuHeaderProps {
    /**
     * Defines ...
     */
    menu: {
        colorNumber: string;
        colorItem: string;
        data: { name: string; goTo: string; }[];
    };
    logo: {
        path: string;
    };
    contactUs: {
        name: string;
        goTo: string;
        color: string;
    };
}