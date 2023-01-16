export interface HeaderComponentProps {
  /**
   * Defines ...
   */
  logo: {
    withText: boolean;
    pathImage: string;
    altImage: string;
  };
  menuHeader: {
    menu: {
      colorNumber: string;
      colorItem: string;
      data: { name: string; goTo: string }[];
    };
    logo: {
      path: string;
    };
    contactUs: {
      name: string;
      goTo: string;
      color: string;
    };
  };
}
