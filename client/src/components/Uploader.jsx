import React, { useState } from 'react';
import { ReactComponent as DefaultImage } from '../image.svg';
import { useHistory } from 'react-router-dom';

function Uploader({ setUpload }) {
    const history = useHistory();
    const [isDrag, setIsDrag] = useState(false);

    const isValidImage = (file) => {
        if (file.type.match(/image\/[a-z]*/) != null) {
            return true;
        }
    };

    const formUploadHandler = () => {
        const image = new FormData(document.forms[0]).get('fileupload');
        if (image.name !== '' && isValidImage(image)) {
            uploadImage(image);
        }
    };

    const uploadImage = (image) => {
        setUpload(image);
        history.push('/loading');
    };

    const dragHandler = (e) => {
        switch (e.type) {
            case 'dragenter':
                e.preventDefault(e);
                setIsDrag(true);
                break;
            case 'dragover':
                e.preventDefault(e);
                setIsDrag(true);
                break;
            case 'dragleave':
                e.preventDefault(e);
                setIsDrag(false);
                break;
            case 'drop':
                setIsDrag(false);
                if (e.dataTransfer.files.length > 0) {
                    e.preventDefault(e);
                    const image = e.dataTransfer.files[0];
                    if (image.name !== '' && isValidImage(image)) {
                        uploadImage(image);
                    }
                }
                break;
            default:
                return e;
        }
    };

    return (
        <div>
            <div className='text-center'>
                <h2 className='mt-5 text-3xl font-bold text-gray-900'>
                    Upload your image
                </h2>
                <p className='mt-2 text-sm text-gray-400'>
                    File should be Jpeg, Png,...
                </p>
            </div>
            <form className='mt-8 space-y-3'>
                <div className='grid grid-cols-1 space-y-2'>
                    <div className='flex items-center justify-center w-full'>
                        <div className='flex flex-col w-full p-10 text-center border-4 border-dashed rounded-lg h-60 group'>
                            <div className='flex flex-col items-center justify-center w-full h-full text-center '>
                                <div
                                    onDragEnter={(e) => dragHandler(e)}
                                    onDragOver={(e) => dragHandler(e)}
                                    onDragLeave={(e) => dragHandler(e)}
                                    onDrop={(e) => dragHandler(e)}
                                    className='flex flex-auto w-2/5 mx-auto -mt-10 max-h-48'
                                >
                                    <DefaultImage className='object-center has-mask h-36' />
                                </div>
                                <p className='text-gray-500 pointer-none '>
                                    <span className='text-sm'>
                                        Drag and drop
                                    </span>{' '}
                                    your image here <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-sm text-gray-300'>
                    <span>Or</span>
                </p>
                <div>
                    <label>
                        <input
                            accept='image/*'
                            id='fileupload'
                            name='fileupload'
                            onChange={() => formUploadHandler()}
                            type='file'
                            className='flex justify-center w-full p-4 my-5 font-semibold tracking-wide text-gray-100 transition duration-300 ease-in bg-blue-500 rounded-full shadow-lg cursor-pointer focus:outline-none focus:shadow-outline hover:bg-blue-600'
                        />
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Uploader;
