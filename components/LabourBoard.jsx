import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
// import "../../styles/JobCard.css"





const painters = ["Christine", "Alex","Grey","Hopper","Maxwell","Christopher","Abraham"]
const LabourWorkData = [
    {Contact : "",Date : "7/12/3",Job:"34567",Client:"furora International",Project:"Library Management"},
    {Contact : "",Date : "7/12/3",Job:"35067",Client:"furora International",Project:"Library Management"},
    {Contact : "",Date : "7/12/3",Job:"35567",Client:"furora International",Project:"Library Management"},
    {Contact : "",Date : "7/12/3",Job:"36067",Client:"furora International",Project:"Library Management"},
]






const LabourBoard = () => {
    const [hourState,setHourState] = useState({})
    const handleChangePersonHour = (e,name,rowindex) => {
        console.log(e.target.value)
        setHourState({val:e.target.value})
        const rowInfo = LabourWorkData?.map((data,index) => {
            return {...data,hourWork: index === hourState.index && hourState}
        })
        console.log(rowInfo)
    }
  return (
    <TableContainer component={Paper} sx={{margin:2,width:"100%",boxShadow:"none",borderLeft:"1px solid black",borderRight:"1px solid black",borderTop:"1px solid black"}}>
      <Table  size="small" aria-label="a dense table">
        <TableHead >
          <TableRow >
            <TableCell colSpan="4" style={{backgroundColor:"#b19cd9" ,"text-align": "center",fontWeight:"bold",fontSize:"25px" }}>Project Labour Board</TableCell>
            <TableCell sx={{borderLeft:"1px solid black",backgroundColor:"#b19cd9" }}></TableCell>
            <TableCell sx={{borderLeft:"1px solid black",backgroundColor:"#b19cd9" }}></TableCell>
            <TableCell sx={{borderLeft:"1px solid black",backgroundColor:"#b19cd9" }}></TableCell>
            <TableCell sx={{borderLeft:"1px solid black",backgroundColor:"#b19cd9" }}></TableCell>
            <TableCell sx={{borderLeft:"1px solid black"}}>Painters</TableCell>
            <TableCell sx={{borderLeft:"1px solid black"}}>Status</TableCell>
            {
                painters?.map((name,index) => (
                  
                        <TableCell sx={{borderLeft:"1px solid black",writingMode:"vertical-rl",textOrientation:"mixed",fontWeight:"bold"}} key={index}>
                            {name}
                        </TableCell>
                   
                ))
            }

          </TableRow>
        </TableHead>
        <TableHead >
          <TableRow >
           
            <TableCell >Contact</TableCell>
            <TableCell sx={{borderLeft:"1px solid black"}}>Date</TableCell>
            <TableCell sx={{borderLeft:"1px solid black" }}> Job no</TableCell>
            <TableCell sx={{borderLeft:"1px solid black" }}>Client</TableCell>
            <TableCell sx={{borderLeft:"1px solid black"}}>Project</TableCell>
            <TableCell sx={{borderLeft:"1px solid black"}}>Office Budget</TableCell>
            <TableCell sx={{borderLeft:"1px solid black"}}>Asseses</TableCell>
            <TableCell sx={{borderLeft:"1px solid black",backgroundColor:"#addfad"}}>WIP</TableCell>
            <TableCell sx={{borderLeft:"1px solid black",backgroundColor:"#b19cd9"}}>To Compelte</TableCell>
            <TableCell sx={{borderLeft:"1px solid black"}}></TableCell>
            {
                painters?.map((name,index) => (
                  
                        <TableCell sx={{borderLeft:"1px solid black"}} key={index}>
                            
                        </TableCell>
                   
                ))
            }

          </TableRow>
        </TableHead>
        <TableBody>
        {LabourWorkData?.map((data,rowindex) => (
            <TableRow key={rowindex}>
             
                    <TableCell >{data.Contact}</TableCell>
                    <TableCell sx={{borderLeft:"1px solid black"}}>{data.Date}</TableCell>
                    <TableCell sx={{borderLeft:"1px solid black"}}>{data.Job}</TableCell>
                    <TableCell sx={{borderLeft:"1px solid black"}}>{data.Client}</TableCell>
                    <TableCell sx={{borderLeft:"1px solid black"}}>{data.Project}</TableCell>
                    <TableCell sx={{borderLeft:"1px solid black"}}>
                        <TextField
                            fullWidth
                            id="standard-basic"
                            variant="standard"
                            InputProps={{
                            disableUnderline: true,
                            }}
                        />
                    </TableCell>
                    <TableCell sx={{borderLeft:"1px solid black"}}>
                        <TextField
                            fullWidth
                            id="standard-basic"
                            variant="standard"
                            InputProps={{
                            disableUnderline: true,
                            }}
                        />
                    </TableCell>
                    <TableCell sx={{borderLeft:"1px solid black",backgroundColor:"#addfad"}}>
                        <TextField
                            fullWidth
                            id="standard-basic"
                            variant="standard"
                            InputProps={{
                            disableUnderline: true,
                            }}
                        />
                    </TableCell>
                    <TableCell sx={{borderLeft:"1px solid black",backgroundColor:"#b19cd9"}}>
                        <TextField
                            fullWidth
                            id="standard-basic"
                            variant="standard"
                            InputProps={{
                            disableUnderline: true,
                            }}
                        />
                    </TableCell>
                    <TableCell sx={{borderLeft:"1px solid black"}}>
                        <TextField
                            fullWidth
                            id="standard-basic"
                            variant="standard"
                            InputProps={{
                            disableUnderline: true,
                            }}
                        />
                    </TableCell>
                    {
                painters?.map((name,index) => (
                  
                        <TableCell sx={{borderLeft:"1px solid black"}} key={index}>
                            <TextField
                                fullWidth
                                id="standard-basic"
                                variant="standard"
                                // defaultValue={index}
                                onChange={(e) => handleChangePersonHour (e,name,rowindex)}
                                InputProps={{
                                disableUnderline: true,
                        
                                
                                }}
                            />
                        </TableCell>
                   
                ))
            }
                
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LabourBoard;