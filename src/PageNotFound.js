import React from 'react';
import { useHistory } from 'react-router-dom';
  
const PageNotFound= () =>{
    let history = useHistory();

    return(
    <div id="error">
        <h1>404 Error</h1>
        <h1>Page not found</h1>
        <p>Sorry to disappoint, but there's nothing to see here...</p>

        <button id="back" onClick={() => history.goBack()}>Back</button>

    </div>
    )
}
  
export default PageNotFound;