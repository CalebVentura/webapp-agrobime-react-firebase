import React from 'react';

export interface GridProps extends RowProps, ColProps, CommonGridProps {
      /**
      *     If true, this element is a row. Otherwise, it is a column.
      */
      row?: boolean;
}

export interface RowProps extends CommonGridProps {
      /**
      *     If true, set it a flex element (Rows only).
      */
      flex?: boolean;
      /**
      *     If true, don't allow spaces between columns (Rows only).
      */
      noGutter?: boolean;
}

export interface ColProps extends CommonGridProps{
      /**
      *     Sets the size of this element for xs breakpoint (Cols only).
      */
      xs?: number;
      /**
      *     Sets the size of this element for sm breakpoint (Cols only).
      */
      sm?: number;
      /**
      *     Sets the size of this element for md breakpoint (Cols only).
      */
      md?: number;
      /**
      *     Sets the size of this element for lg breakpoint (Cols only).
      */
      lg?: number;
      /**
      *     Sets the size of this element for xl breakpoint (Cols only).
      */
      xl?: number;

      /**
      *     Sets the size of this element for all breakpoints (Cols only).
      */
      size?: number;
      /**
      *     Sets the size of this element for any undefined breakpoints (Cols only).
      */
      other?: number;

      /**
      *     Sets the size of this element for all breakpoints under sm (ie. xs) (Cols only).
      */
      usm?: number;
      /**
      *     Sets the size of this element for all breakpoints under md (ie. xs and sm) (Cols only).
      */
      umd?: number;
      /**
      *     Sets the size of this element for all breakpoints under lg (ie. xs, sm and md) (Cols only).
      */
      ulg?: number;
      /**
      *     Sets the size of this element for all breakpoints under xl (ie. xs, sm, md and lg) (Cols only).
      */
      uxl?: number;

      /**
      *     Sets the size of this element for all breakpoints over sm, including it (ie. sm, md, lg and xl) (Cols only).
      */
      osm?: number;
      /**
      *     Sets the size of this element for all breakpoints over md, including it (ie. md, lg and xl) (Cols only).
      */
      omd?: number;
      /**
      *     Sets the size of this element for all breakpoints over lg, including it (ie. lg and xl) (Cols only).
      */
      olg?: number;
      /**
      *     Sets the size of this element for all breakpoints over xl, including it (ie. xl) (Cols only).
      */
      oxl?: number;

      /**
      *     If true, align content vertically to center (Cols only)
      */
      center?: boolean;
}

interface CommonGridProps {
      /**
      *     Function to call when element is clicked
      */
       onClick?: (e?: React.MouseEvent<HTMLImageElement, MouseEvent>)=>void;

      /**
      *     Additional classes to pass to element
      */
      className?: string;
      /**
       *     Children to be displayed inside the element
       */
      children?: React.ReactNode;

      /**
       *     Used for testing purposes
       */
      testId?: string;
}
