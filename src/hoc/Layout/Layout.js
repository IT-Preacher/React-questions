import React from 'react';
import './Layout.css';
import classes from './Layout.css';
/*className={classes.Layout}*/

export default function Layout (props) {
  return(
    <div className="Layout">
      <main>
        {props.children}
      </main>
    </div>
  );
}
