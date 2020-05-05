import React from 'react';

const PhotographerCollections = ({list}) =>{
   list && console.log()
    return(
        <section>
            <div className='row'>
                {(list && list.length > 0) &&
                list.map(({cover_photo:{urls:{full}}, preview_photos, tags},index)=>{
                   return( <div key={index} className='col-lg-4 col-md-6 px-4 my-3'>
                    <div className='row'>
                      <div className='col-6' style={{
                          backgroundImage:`url(${full}`,
                          minHeight: '9em',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPositionX: 'center'
                          }}>

                      </div>
                      <div className='col-6'>
<div className='row'>
   {
       preview_photos.map(({urls:{full}},index)=>{
           return(
            <div key={index} className='col-12' style={{
                backgroundImage:`url(${full})`,
                minHeight: '9em',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
            </div>
           )
       })
   }
    
</div>

                      </div>
                      <div className='row'>
{
       tags.map(({title},index)=>{
           return(
            <div key={index} className='col-2' style={{
                backgroundColor:'red'
                }}>
                    {title}
            </div>
           )
       })
   }
    </div>
                    </div>
                </div>
                )})
                } 
            </div>
        </section>

    )
}

export default PhotographerCollections;