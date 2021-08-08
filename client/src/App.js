import './App.css';
import React from 'react';
import Uploader from './components/Uploader';
import Loading from './components/ImageLoading';
import axios from './axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ImageUploaded from './components/ImageUploaded';
function App() {
    const [uploadedUrl, setUploadedUrl] = React.useState();

    const setUpload = async (image = {}) => {
        const formData = new FormData(); //Sends image as part of from data to avoid wierd Boundry issues when sending multipart/form data when not part of an actual form
        formData.append('file', image);
        const response = await axios.post('/upload', formData);
        setUploadedUrl(response.data.url);
    };
    return (
        <Router>
            <div className='app'>
                <div className='flex content-center self-center justify-center text-center App h-100'>
                    <div className='z-10 items-center content-center justify-center w-full p-10 bg-white sm:max-w-lg rounded-xl'>
                        <Switch>
                            <Route exact path='/'>
                                <Uploader setUpload={setUpload} />
                            </Route>
                            <Route exact path='/loading'>
                                <Loading />
                            </Route>
                            <Route exact path='/uploaded'>
                                <ImageUploaded uploadedUrl={uploadedUrl} />
                            </Route>
                        </Switch>
                    </div>{' '}
                </div>{' '}
            </div>
        </Router>
    );
}

export default App;
