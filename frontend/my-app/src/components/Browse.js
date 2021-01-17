import React from 'react';
import '../style/Browse.css'
import LeftNav from './LeftNav'
import Dashboard from './Dashboard'
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    }
}));



export default function Browse() {
  const classes = useStyles();
  const [fileName, setFileName] = React.useState("");
  const onChangeHandler = event => {
    setFileName(event.target.files[0].name);
  };
  

  return (
    <div className={classes.root}>
      <LeftNav></LeftNav>
      <div className='rightPanelContent'>
        <div className='yourContainer'>
          <h2>Your Business</h2>
          <form method='post'>
            <div className="fileUpload">
              <label className='uploadBtn'>
                <input type='file' style={{display:'none'}} onChange={onChangeHandler}></input>
                <span>Add your file here</span>
              </label>
              <span style={{fontSize: '8px', marginTop:'1em', color: 'gray'}}>CSV, Excel, Numbers</span>
              <span style={{fontSize: '9px', marginTop:'1em'}}>{fileName}</span>
              
            </div>
          </form>
          
          
        </div>
        <div className='businessContainer'>
          <h2>Compare with other businesses</h2>
          <SearchBar></SearchBar>
          <Dashboard></Dashboard>
        </div>
      </div>
      
    </div>
  );
}