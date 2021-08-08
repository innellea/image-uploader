import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Loading() {
    const [increment, setIncrement] = useState(10);
    const history = useHistory();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (increment === 100) {
                history.push('/uploaded');
                return;
            }
            setIncrement(increment + 5);
        }, 200);

        return () => {
            clearTimeout(timeout);
        };
    }, [increment, history]);

    return (
      
        <div className='content-center self-center pt-5 justify-center m-2 align-middle '>
            <h3 className='content-center justify-center m-0 align-middle center'>
                Uploading...
            </h3>
            <div>
                <div
                    role='progressbar'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    className='relative h-3 max-w-lg overflow-hidden rounded-full '
                >
                    <div className='absolute w-full h-full bg-gray-200'></div>
                    <div
                        className={`h-full bg-blue-500 rounded absolute w-${increment}`}
                    ></div>
                </div>
            </div>
        </div>
     
    );
}

export default Loading;
