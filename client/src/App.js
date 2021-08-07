import './App.css';

function App() {
    return (
        <div className='App content-center flex self-center mt-0 content-center	 justify-center'>
            <div class='sm:max-w-lg w-full p-10 content-center justify-center items-center	  bg-white rounded-xl z-10'>
                <div class='text-center'>
                    <h2 class='mt-5 text-3xl font-bold text-gray-900'>
                        Upload your image
                    </h2>
                    <p class='mt-2 text-sm text-gray-400'>
                        File should be jpeg, png..
                    </p>
                </div>
                <form class='mt-8 space-y-3' action='#' method='POST'>
                    <div class='grid grid-cols-1 space-y-2'>
                        <label class='text-sm font-bold text-gray-500 tracking-wide'>
                            Attach Document
                        </label>
                        <div class='flex items-center justify-center w-full'>
                            <label class='flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center'>
                                <div class='h-full w-full text-center flex flex-col items-center justify-center  '>
                                    <div class='flex flex-auto max-h-48 w-2/5 mx-auto -mt-10'>
                                        <img
                                            class='has-mask h-36 object-center'
                                            src='https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg'
                                            alt='upload '
                                        />
                                    </div>
                                    <p class='pointer-none text-gray-500 '>
                                        <span class='text-sm'>
                                            Drag and drop
                                        </span>{' '}
                                        files here <br /> or{' '}
                                        <a
                                            href=''
                                            id=''
                                            class='text-blue-600 hover:underline'
                                        >
                                            select a file
                                        </a>{' '}
                                        from your computer
                                    </p>
                                </div>
                                <input type='file' class='hidden' />
                            </label>
                        </div>
                    </div>
                    <p class='text-sm text-gray-300'>
                        <span>Or</span>
                    </p>
                    <div>
                        <button
                            type='submit'
                            class='my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300'
                        >
                            Choose a file
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
