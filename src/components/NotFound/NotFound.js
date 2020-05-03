import React from 'react';
import NotFoundBg from './../../assets/images/404_page_not_found.jpg';
const NotFound = () =>{
    return(
        <section style={{backgroundColor:'#fafafa'}}>
            <div style={{
            width:'70%',
            margin:'0 auto',
            minHeight:'90vh',
            backgroundImage:`url(${NotFoundBg})`,
            backgroundSize:'contain',
            backgroundRepeat  : 'no-repeat',
            backgroundPosition: `center`
        }}></div>
        </section>
    )
}

export default NotFound ;