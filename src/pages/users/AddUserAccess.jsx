import axios from "axios";
import React, { useEffect, useState } from "react";
import { VscClose } from 'react-icons/vsc';
import { useSearchParams } from "react-router-dom";

const AddUserAccess = () => {
	const [info, setInfo] = useState({});
	const [courses, setCourses] = useState([]);
	const [acceded, setAcceced] = useState([]);
	console.log(
		"🚀 ~ file: AddUserAccess.jsx ~ line 9 ~ AddUserAccess ~ acceded",
		acceded
	);
	const [searchParams] = useSearchParams();
	const email = searchParams.get("email");

	useEffect(() => {
		axios
			.get("http://localhost:5000/course")
			.then((res) => setCourses(res.data));
		axios
			.get(`http://localhost:5000/users/${email}`)
			.then((res) => {
				setInfo(res.data);
				setAcceced(res.data.courses);
			});
	}, [email]);

	const handleSubmit = () => {

		const data = {
			email,
			courses: acceded
		};
		axios.put(`http://localhost:5000/users/${email}`, data)
			.then(res => {
				if (res.status === 200) {
					console.log('updated');
				}
			});

	};

	return (
		<div>
			<div>
				<div className="w-full lg:w-5/6 mx-auto sm:mt-0">
					<div className="md:grid md:grid-cols-1 md:gap-6">
						<div className="md:col-span-1 text-center">
							<div className="px-4 sm:px-0">
								<h3 className="text-2xl font-medium leading-6 text-gray-900">
									Add Access
								</h3>
								<div className="w-14 mt-3 h-1 mx-auto bg-blue-600 rounded-full">
									<p className="mt-1 text-sm text-gray-600 "></p>
								</div>
							</div>
						</div>
						<div className="mt-5 md:mt-0 md:col-span-2 border rounded-lg border-gray-200 shadow-2xl">
							<form onSubmit={(e) => e.preventDefault()}>
								<div className="shadow overflow-hidden sm:rounded-md">
									<div className="px-4 py-5 bg-white sm:p-6">
										<div className="grid grid-cols-6 gap-6">
											<div className="col-span-6 sm:col-span-6">
												<label
													htmlFor="first-name"
													className="block text-sm font-medium text-gray-700"
												>
													Email
												</label>
												<input
													disabled
													type="text"
													name="first-name"
													id="first-name"
													defaultValue={info?.email}
													autoComplete="given-name"
													className="mt-1 px-5 py-2 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 ring-blue-600 transition duration-300 mb-3"
												/>
											</div>

											<div className="col-span-6 sm:col-span-3">
												<label
													htmlFor="first-name"
													className="block text-sm font-medium text-gray-700"
												>
													Courses{" "}
												</label>

												<div className="mt-1 px-5 min-h-[40px] flex flex-wrap items-center gap-x-3 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 ring-blue-600 transition duration-300 mb-3 ">
													{acceded.map((c) => (
														<div className="pl-1 pr-6 py-1 border text-xs flex gap-x-1 items-center rounded-md relative">
															<span>{c}</span>
															<div onClick={() => {
																const newAccess = acceded.filter(code => code !== c);
																setAcceced(newAccess);
															}} className="p-[2px]  hover:bg-gray-200  rounded-full cursor-pointer absolute right-1">
																<VscClose />
															</div>
														</div>
													))}
												</div>
											</div>

											<div className="col-span-6 sm:col-span-3">
												<label
													htmlFor="first-name"
													className="block text-sm font-medium text-gray-700"
												>
													Courses list
												</label>
												<select
													onChange={(e) =>
														setAcceced((preValue) => [
															...preValue,
															Number(e.target.value),
														])
													}
													className="mt-1 px-5 py-2 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 ring-blue-600 transition duration-300 mb-3"
												>
													<option value="Select Course">-- Select Course --</option>
													{courses.map((c) => (
														<option
															key={c.code}
															value={c.code}
														>{`${c.courseName} - ${c.code}`}</option>
													))}

												</select>
											</div>
										</div>
									</div>

									{/* <div>
                    <select
                      value={acceded}
                      onChange={(e) => {
                        setAcceced((preVal) => [...preVal, e.target.value]);
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div> */}

									<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
										<button
											onClick={handleSubmit}
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

export default AddUserAccess;
