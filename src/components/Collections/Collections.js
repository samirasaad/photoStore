import React from 'react';

const PhotographerCollections = ({ list }) => {
    list && console.log()
    return (
        <section>
            <div className='row'>
                {(list && list.length > 0) &&
                    list.map(({ title, cover_photo: { urls: { full } }, preview_photos, tags }, index) => {
                        return (<div key={index} className='col-lg-4 col-md-6 px-4 my-3'>
                            <div className='row my-3'>
                                <div className='col-12' style={{
                                    backgroundImage: `url(${full}`,
                                    minHeight: '20em',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPositionX: 'center',
                                }}>

                                </div>
                                <div className='col-12'>
                                    <div className='row my-2'>
                                        {
                                            preview_photos.map(({ urls: { full } }, index) => {
                                                return (
                                                    <div key={index} className='col-3' style={{
                                                        backgroundImage: `url(${full})`,
                                                        minHeight: '9em',
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPositionX: 'center',
                                                        border: '2px solid #fffefe'
                                                    }}>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>

                                </div>
                                <h3 className='font-weight-bold mb-4'>{title}</h3>
                                <div className='row mx-0'>
                                    {
                                        tags.map(({ title }, index) => {
                                            return (
                                                <div key={index} className='col-md-3 col-4 ' style={{
                                                    backgroundColor: '#f6f6f6',
                                                    borderRadius: '8px',
                                                    border: '1px solid white'
                                                }}>
                                                    <p className='mb-1 text-center' style={{}}>{title}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </section>

    )
}

export default PhotographerCollections;