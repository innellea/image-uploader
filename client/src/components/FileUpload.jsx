import React from 'react';

import axios from 'axios';
function FileUpload() {
    const [file, setFile] = React.useState('');
    const [fileName, setFileName] = React.useState('Choose file');
    const [uploadedFile, setUploadedFile] = React.useState({});

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath });
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
            } else {
                console.log(err.response.data.msg);
            }
        }
    };

    const Modal = () => {
        if (fileName === 'Choose file') {
            return (
                <div className='grid grid-cols-1 space-y-2'>
                    <div className='flex items-center justify-center w-full'>
                        <label className='flex flex-col w-full p-10 text-center border-4 border-dashed rounded-lg h-60 group'>
                            <div className='flex flex-col items-center justify-center w-full h-full text-center '>
                                <div className='flex flex-auto w-2/5 mx-auto -mt-10 max-h-48'>
                                    <img
                                        className='object-center has-mask h-36'
                                        src='https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg'
                                        alt='upload '
                                    />
                                </div>

                                <p className='text-gray-500 pointer-none '>
                                    <span className='text-sm'>
                                        Drag and drop
                                    </span>{' '}
                                    your image here <br />
                                </p>
                            </div>
                            <input
                                onChange={onChange}
                                type='file'
                                className='hidden'
                            />
                        </label>
                    </div>
                </div>
            );
        } else
            return (
                <div className='grid grid-cols-1 space-y-2'>
                    <h3>{uploadedFile.fileName}</h3>
                    <div className='flex items-center justify-center w-full'>
                        <label className='flex flex-col w-full p-10 text-center border-4 border-dashed rounded-lg h-60 group'>
                            <div className='flex flex-col items-center justify-center w-full h-full text-center '>
                                <div className='flex flex-auto m-auto max-h-100'>
                                    <img
                                        className=' has-mask'
                                        src={uploadedFile.filePath}
                                        alt='upload '
                                    />
                                </div>
                                {/* {uploadedFile ? (
                                    <div className=''>
                                        <h3>{uploadedFile.fileName}</h3>
                                        <img
                                            src={uploadedFile.filePath}
                                            alt=''
                                        />
                                    </div>
                                ) : (
                                    <div></div>
                                )} */}
                            </div>
                            <input
                                onChange={onChange}
                                type='file'
                                className='hidden'
                            />
                        </label>
                    </div>
                </div>
            );
    };

    return (
        <div>
            <div className='flex content-center self-center justify-center mt-0 App'>
                <div className='z-10 items-center content-center justify-center w-full p-10 bg-white sm:max-w-lg rounded-xl'>
                    <div className='text-center'>
                        <h2 className='mt-5 text-3xl font-bold text-gray-900'>
                            Upload your image
                        </h2>
                        <p className='mt-2 text-sm text-gray-400'>
                            File should be jpeg, png..
                        </p>
                    </div>
                    <form onSubmit={onSubmit} className='mt-8 space-y-3'>
                        <Modal />

                        <p className='text-sm text-gray-300'>
                            <span>Or</span>
                        </p>
                        <div>
                            <button
                                onChange={onChange}
                                type='submit'
                                className='flex justify-center w-full p-4 my-5 font-semibold tracking-wide text-gray-100 transition duration-300 ease-in bg-blue-500 rounded-full shadow-lg cursor-pointer focus:outline-none focus:shadow-outline hover:bg-blue-600'
                            >
                                Choose a file
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FileUpload;
