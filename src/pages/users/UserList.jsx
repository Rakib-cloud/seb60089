import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useEffect, useState } from "react";
const ListPageLayout = () => {
  const [data, setData] = useState([]);
  console.log(
    "🚀 ~ file: UserList.jsx ~ line 16 ~ ListPageLayout ~ data",
    data
  );

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://autism60089s.herokuapp.com/users");
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 px-5 py-8 border border-gray-200 bg-white rounded-lg items-center shadow-lg mb-10">
        <h1 className="text-xl font-medium mb-2 md:mb-0">Users</h1>
        <div className="relative flex flex-col lg:flex-row gap-4">
          <BsSearch className="absolute top-4 left-3 text-gray-600" />
          <input
            className="px-10 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 w-full ring-blue-600 transition duration-300"
            type="number"
            placeholder="search here"
          />
          {/* <Link to={"/adduser"}>
            <button className="flex w-full items-center gap-x-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-600 transition duration-500 ring-offset-2 text-white">
              <BsPlus className="text-2xl" />
              User
            </button>
          </Link> */}
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Courses</TableCell>
              <TableCell align="center">Access</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.courses}</TableCell>
                <TableCell align="center">
                  <Link to={`/adduser?email=${row.email}`}>
                    <button className="border">X</button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        {/* <TableContainer component={Paper} sx={{ boxShadow: '0px 8px 10px #ddd', border: '1px solid #ddd', borderRadius: '0.5rem' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">

                        <TableHead className='bg-slate-50'>

                            <TableRow>

                                {
                                    header?.map(header => <TableCell key={header} align="center"><h1 className='font-bold text-base'>{header}</h1></TableCell>)
                                }

                            </TableRow>

                        </TableHead>

                        {
                            title === 'Skills' && <TableBody>

                                {

                                    displayRows.length !== 0 ?

                                        displayRows.length > 0 ? displayRows?.map((row) =>

                                            <TableRow key={row._id}>
                                                <TableCell align="center"><img src={row.img} className='w-[50px] mx-auto rounded-sm' /></TableCell>
                                                <TableCell align="center"><h1 className='font-semibold text-base'>{row.progress}</h1></TableCell>
                                                <TableCell align="center"><h1 className='font-semibold text-base'>{row.featured}</h1></TableCell>
                                                <TableCell align="center">
                                                    <div className='flex gap-x-4 justify-center'>


                                                        <DeleteModal deleteHandler={() => deleteSkill(row._id)} />
                                                        <Link to={`/dashboard/updateskill?id=${row._id}`}>
                                                            <button className='p-2 border rounded-full hover:bg-gray-200'><FiEdit className='text-xl' /></button>
                                                        </Link>

                                                    </div>
                                                </TableCell>
                                            </TableRow>

                                        ) : <TableRow>
                                            <TableCell align="center" colSpan={4}><div className='flex justify-center py-5'><PulseLoader color={'#3B82F6'} className="text-center" /></div> </TableCell>
                                        </TableRow> : <TableRow>
                                            <TableCell align="center" colSpan={4}>
                                                <div className='flex justify-center'><img className='w-[150px]' src={nodata} alt="nodata" /></div> </TableCell>
                                        </TableRow>

                                }

                            </TableBody>

                        }

                        {

                            title === 'Projects' && <TableBody>

                                {
                                    displayRows?.map((row) => <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        className='hover:bg-gray-100'
                                    >
                                        <TableCell align="center"><h1 className='font-semibold text-base'>{row.image}</h1></TableCell>
                                        <TableCell align="center"><h1 className='font-semibold text-base'>{row.name}</h1></TableCell>
                                        <TableCell align="center"><h1 className='font-semibold text-base'>{row.gitlink}</h1></TableCell>
                                        <TableCell align="center"><h1 className='font-semibold text-base'>{row.livelink}</h1></TableCell>
                                        <TableCell align="center">
                                            <div className='flex gap-x-4 justify-center'>

                                                <button className='p-2 border rounded-full bg-red-500 hover:bg-red-700 text-white transition duration-500 shadow-lg'><AiOutlineDelete className='text-xl' /></button>

                                                <Link to={`/dashboard`}>
                                                    <button className='p-2 border rounded-full hover:bg-gray-200'><FiEdit className='text-xl' /></button>
                                                </Link>

                                            </div>
                                        </TableCell>
                                    </TableRow>)
                                }

                            </TableBody>

                        }

                    </Table>

                </TableContainer> */}
      </div>

      {/* <ToastContainer position='bottom-left' theme='colored' autoClose={4000} /> */}
    </>
  );
};

export default ListPageLayout;
