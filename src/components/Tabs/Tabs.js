import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ImagesList from '../../containers/ImagesList/ImagesList';
import './Tabs.scss'
import ImagesHolder from '../../containers/ImagesHolder/ImagesHolder';
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
    label: 'Photos'
  },
  {
    id: `simple-tab-1`,
    label: 'Likes'
  },
  {
    id: `simple-tab-2`,
    label: 'Collections'
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ProfileTabs({photos}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const panels = [
    <ImagesHolder list={photos} />,
    // <ImagesList />,
    // 'collection'
  ]
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='tabs-wrapper'>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} >
          {
            tabsHeading.map((heading, index) => {
              return (
                <Tab key={index} label={heading.label} id={heading.id} onClick={heading.route} />
              )
            })
          }
        </Tabs>
      </AppBar>

      {panels.map((panel, index) => {
        return (<TabPanel key={index} value={value} index={0}>
          {panel}
        </TabPanel>)
      })}
    </div>
  );
}