/* eslint-disable react/destructuring-assignment */

import { ColProps, GridProps, RowProps } from './Grid.types';
import './Grid.scss';

const Grid = function (props: GridProps) {
  let className = '';
  if (props.row) {
    className += 'RQ-row ';
    if (props.flex) {
      className += 'RQ-row-flex ';
    }
    if (props.noGutter) {
      className += 'RQ-no-gutter ';
    }
  } else {
    let {
      xs, sm, md, lg, xl,
    } = props;
    className += 'RQ-col ';

    if (props.size !== undefined) {
      xs = props.size;
      sm = props.size;
      md = props.size;
      lg = props.size;
      xl = props.size;
    }

    if (props.uxl !== undefined) {
      xs = props.uxl;
      sm = props.uxl;
      md = props.uxl;
      lg = props.uxl;
    }

    if (props.osm !== undefined) {
      sm = props.osm;
      md = props.osm;
      lg = props.osm;
      xl = props.osm;
    }

    if (props.ulg !== undefined) {
      xs = props.ulg;
      sm = props.ulg;
      md = props.ulg;
    }

    if (props.omd !== undefined) {
      md = props.omd;
      lg = props.omd;
      xl = props.omd;
    }

    if (props.umd !== undefined) {
      xs = props.umd;
      sm = props.umd;
    }
    if (props.olg !== undefined) {
      lg = props.olg;
      xl = props.olg;
    }

    if (props.usm !== undefined) {
      xs = props.usm;
    }
    if (props.oxl !== undefined) {
      xl = props.oxl;
    }

    if (props.other !== undefined) {
      if (xs === undefined) {
        xs = props.other;
      }
      if (sm === undefined) {
        sm = props.other;
      }
      if (md === undefined) {
        md = props.other;
      }
      if (lg === undefined) {
        lg = props.other;
      }
      if (xl === undefined) {
        xl = props.other;
      }
    }
    if (xs !== undefined) {
      if (xs === 0) {
        className += 'RQ-hidden-xs ';
      } else {
        className += `RQ-col-xs-${xs} `;
      }
    }
    if (sm !== undefined) {
      if (sm === 0) {
        className += 'RQ-hidden-sm ';
      } else {
        className += `RQ-col-sm-${sm} `;
      }
    }
    if (md !== undefined) {
      if (md === 0) {
        className += 'RQ-hidden-md ';
      } else {
        className += `RQ-col-md-${md} `;
      }
    }
    if (lg !== undefined) {
      if (lg === 0) {
        className += 'RQ-hidden-lg ';
      } else {
        className += `RQ-col-lg-${lg} `;
      }
    }
    if (xl !== undefined) {
      if (xl === 0) {
        className += 'RQ-hidden-xl ';
      } else {
        className += `RQ-col-xl-${xl} `;
      }
    }

    if (props.center) {
      className += 'RQ-align-self-center ';
    }
  }

  if (props.className) {
    className += props.className;
  }

  className = className.trim();

  /* eslint "@typescript-eslint/no-explicit-any": "off" */
  const divProps: any = {};
  if (props.testId) {
    divProps['data-testid'] = props.testId;
  }

  if (props.onClick) {
    divProps.onClick = props.onClick;
  }

  return (
    <div className={className} {...divProps}>
      {props.children}
    </div>
  );
};

export default Grid;

export const Row = function (props: RowProps) {
  return (
    <Grid row {...props} />
  );
};

export const Col = function (props: ColProps) {
  return (
    <Grid {...props} />
  );
};
