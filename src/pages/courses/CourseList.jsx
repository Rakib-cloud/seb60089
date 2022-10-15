import { BsPlus, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const ListPageLayout = () => {
    return (
        <>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 px-5 py-8 border border-gray-200 bg-white rounded-lg items-center shadow-lg mb-10">
                <h1 className="text-xl font-medium mb-2 md:mb-0">Courses</h1>
                <div className="relative flex flex-col lg:flex-row gap-4">
                    <BsSearch className="absolute top-4 left-3 text-gray-600" />
                    <input
                        className="px-10 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 w-full ring-blue-600 transition duration-300"
                        type="number"
                        placeholder="search here"
                    />
                    <Link to={"/addcourse"}>
                        <button className="flex w-full items-center gap-x-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-600 transition duration-500 ring-offset-2 text-white">
                            <BsPlus className="text-2xl" />
                            Course
                        </button>
                    </Link>
                </div>
            </div>

            <div>

            </div>

        </>
    );
};

export default ListPageLayout;
