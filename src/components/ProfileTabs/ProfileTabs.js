import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ImagesHolder from '../../containers/ImagesHolder/ImagesHolder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import PhotoIcon from '@material-ui/icons/Photo';
import './ProfileTabs.scss';
import PhotographerCollections from '../Collections/Collections';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <section>{children}</section>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const tabsHeading = [
  {
    id: `simple-tab-0`,
    label: 'Photos',
    icon: <PhotoIcon />
  },
  {
    id: `simple-tab-1`,
    label: 'Likes',
    icon: <FavoriteIcon />
  },
  {
    id: `simple-tab-2`,
    label: 'Collections',
    icon: <LibraryAddIcon />
  }
]

const ProfileTabs = ({ photographerProfile: { photos, likes, collections } }) => {
  const [value, setValue] = React.useState(0);
  const panels = [
    <ImagesHolder list={photos} />,
    <ImagesHolder list={likes} />,
    <PhotographerCollections list={collections}/>
  ]
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='tabs-wrapper' stlye={{minHeight: '70vh'}}>
      <AppBar position="static" className='my-4'>
        <Tabs value={value} onChange={handleChange} >
          {
            tabsHeading.map(({ label, id, icon }, index) => {
              return (
                <Tab key={index} label={
                  (photos && likes && collections) &&
                  (index === 0 ? photos.length : index === 1 ? likes.length : collections.length)
                  + ' ' + label} id={id} icon={icon} />
              )
            })
          }
        </Tabs>
      </AppBar>

      {panels.map((panel, index) => {
        return (<TabPanel key={index} value={value} index={index}>
          {panel}
        </TabPanel>)
      })}
    </div>
  );
}

export default ProfileTabs;