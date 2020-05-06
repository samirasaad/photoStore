// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import './Loader.scss'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > * + *': {
//       marginLeft: theme.spacing(2),
//     },
//   },
// }));

// export default function CircularIndeterminate() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CircularProgress color='primary' className='loader-icon'/>
//     </div>
//   );
// }

import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loader.scss';

const Loader = () => {
    return (
        <div className="loaderContainer">
            <Spinner animation="border" variant="warning"/>
        </div>
    )
}

export default Loader ;