import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { VscClose } from 'react-icons/vsc';
import imageUploader from '../../utils/imageUploader';

const AddCourse = () => {

    const [files, setFiles] = useState([]);
    const courseNameRef = useRef('');
    const institutionNameRef = useRef('');
    const courseDurationRef = useRef('');
    const courseDetailsRef = useRef('');
    const coursePriceRef = useRef('');
    const courseImageRef = useRef('');

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });
    const imageFile = files.map(file => (
        <h4 key={file.path} className="inline">
            Image Preview : {file.path}
        </h4>
    ));

    const handleCourseUpload = () => {

        const courseName = courseNameRef.current.value;
        const institutionName = institutionNameRef.current.value;
        const courseDuration = Number(courseDurationRef.current.value);
        const courseDetails = courseDetailsRef.current.value;
        const coursePrice = Number(coursePriceRef.current.value);
        const courseImage = courseImageRef.current.value;
        const data = { courseName, institutionName, courseDuration, courseDetails, coursePrice, courseImage };
        console.log("🚀 ~ file: AddCourse.jsx ~ line 42 ~ handleCourseUpload ~ data", data);

        imageUploader(files, setFiles)
            .then(image => {
                const data = { courseName, institutionName, courseDuration, courseDetails, coursePrice, courseImage, image };

                axios.post('https://autism60089s.herokuapp.com/course', data).then(res => {
                    console.log("🚀 ~ file: AddCourse.jsx ~ line 50 ~ imageUploader ~ res", res);

                });

            }).catch(err => {
                console.log("🚀 ~ file: AddCourse.jsx ~ line 56 ~ handleCourseUpload ~ err", err);

            });

    };

    return (
        <div>
            <div>
                <div className="w-full lg:w-5/6 mx-auto sm:mt-0" >
                    <div className="md:grid md:grid-cols-1 md:gap-6">
                        <div className="md:col-span-1 text-center">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-2xl font-medium leading-6 text-gray-900">Information</h3>
                                <div className='w-14 mt-3 h-1 mx-auto bg-blue-600 rounded-full'>
                                    <p className="mt-1 text-sm text-gray-600 "></p>
                                </div>

                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2 border rounded-lg border-gray-200 shadow-2xl">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">



                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    Course Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    ref={courseNameRef}
                                                    autoComplete="given-name"
                                                    className="mt-1 px-5 py-2 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 ring-blue-600 transition duration-300 mb-3"

                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    Institution Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    ref={institutionNameRef}
                                                    autoComplete="family-name"
                                                    className="mt-1 px-5 py-2 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 ring-blue-600 transition duration-300 mb-3"

                                                />
                                            </div>



                                            <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                    Course Details
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    ref={courseDetailsRef}
                                                    autoComplete="address-level2"
                                                    className="mt-1 px-5 py-2 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 ring-blue-600 transition duration-300 mb-3"

                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Course Duration
                                                </label>
                                                <input
                                                    type="number"
                                                    name="email-address"
                                                    id="email-address"
                                                    ref={courseDurationRef}
                                                    autoComplete="email"
                                                    className="mt-1 px-5 py-2 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 ring-blue-600 transition duration-300 mb-3"

                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                    Course Price
                                                </label>
                                                <input
                                                    type="number"
                                                    name="region"
                                                    id="region"
                                                    ref={coursePriceRef}
                                                    autoComplete="address-level1"
                                                    className="mt-1 px-5 py-2 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 ring-blue-600 transition duration-300 mb-3"

                                                />
                                            </div>

                                        </div>

                                        <div className='flex flex-col md:flex-row items-center justify-center gap-5'>

                                            {
                                                files[0] &&
                                                <div>
                                                    <img className='border-[5px] w-[300px] border-gray-400 rounded-xl' src={files[0]?.preview} alt="selected" />
                                                    {
                                                        <div className='text-center text-sm mt-2 text-gray-700 font-semibold gap-x-2 flex items-center justify-center'>
                                                            {imageFile}
                                                            <div onClick={() => setFiles([])} className='p-[2px] text-base border rounded-full cursor-pointer text-red-600'><VscClose /></div>

                                                        </div>
                                                    }

                                                </div>

                                            }

                                            <div className='flex flex-col items-end justify-center gap-y-3 w-full'>
                                                <div {...getRootProps()} className="hover:border-blue-600 transition duration-75 mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md w-full outline-none">
                                                    <div className="space-y-1 text-center">
                                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <div className="flex text-sm text-gray-600">
                                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                                <span>Upload a file</span>
                                                                <input {...getInputProps()} className="sr-only" />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">


                                        <button
                                            onClick={handleCourseUpload}
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                                        >
                                            Save
                                        </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;