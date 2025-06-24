import React from "react";
import { useRouteError } from 'react-router-dom';

const Error = () =>{

    const useRouteErrorObj = useRouteError();

    //destructing useRouteErrorObj

    const{status,statusText} = useRouteErrorObj;
    // console.log(useRouteError());

    return(
        
        <>
        <h1>OOPS!</h1>
        <h1>{status}</h1>
        <h4>{statusText}</h4>

        <div className='EroorPageContainer'>
        <h1 id="ErrorH">Oops!</h1>
        <h1 id="ErrorP">
          {status}
        </h1>
        <h4 id="ErrorP">
          {statusText}
        </h4>
        <button className='Errorretry-button' onClick={() => location.reload()}>
          Retry
        </button>
      </div>
      <h1>OOPS</h1>
        </>
    );
}

export default Error;