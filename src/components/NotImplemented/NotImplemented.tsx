import * as React from 'react';
import { Link } from 'react-router-dom';

class NotImplemented extends React.Component {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <p>This feature has not been implemented</p>
        <Link to="/">Go to front page</Link>
     </div>
    );
  }
}

export default NotImplemented;