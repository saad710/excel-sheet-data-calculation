import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
// import "../../styles/JobCard.css"

const painters = ["Christine", "Alex", "Grey", "Hopper"];
// const LabourWorkData = [
//     {Contact : "",Date : "7/12/3",Job:"34567",Client:"furora International",Project:"Library Management"},
//     {Contact : "",Date : "7/12/3",Job:"35067",Client:"furora International",Project:"Library Management"},
//     {Contact : "",Date : "7/12/3",Job:"35567",Client:"furora International",Project:"Library Management"},
//     {Contact : "",Date : "7/12/3",Job:"36067",Client:"furora International",Project:"Library Management"},
// ]

// let myObj = {
//     foo0_hour_0: 'test',
//     foo1_hour_0: 'test',
//     foo2: 'test',
//     foo3: 'test',
//   };
  
//   const res = Object.keys(myObj).filter(([c]) => c == "[a-zA-Z]+_0-9");
//   console.log(res);
// let filtered_keys = (obj, filter) => {
//     let key, keys = []
//     for (key in obj)
//       if (obj.hasOwnProperty(key) && filter.test(key))
//         keys.push(key)
//     return keys
//   }
  
//   // example:
//   let filteredNames = filtered_keys(myObj, /hour_1/)

const LabourWorkData = [
  {
    Contact: "",
    Date: "7/12/3",
    Job: "34567",
    Client: "furora International",
    Project: "Library Management",
    officeBudget: 0,
    Assess: 0,
    Wip: 0,
    toComplete: 0,
    painters: [
      { name: "Christine", value: 0 },
      { name: "Alex", value: 0 },
      { name: "Grey", value: 0 },
      { name: "Hopper", value: 0 },
    ],
  },
  {
    Contact: "",
    Date: "7/12/3",
    Job: "35067",
    Client: "furora International",
    Project: "Library Management",
    officeBudget: 0,
    Assess: 0,
    Wip: 0,
    toComplete: 0,
    painters: [
      { name: "Christine", value: 0 },
      { name: "Alex", value: 0 },
      { name: "Grey", value: 0 },
      { name: "Hopper", value: 0 },
    ],
  },
  {
    Contact: "",
    Date: "7/12/3",
    Job: "35567",
    Client: "furora International",
    Project: "Library Management",
    officeBudget: 0,
    Assess: 0,
    Wip: 0,
    toComplete: 0,
    painters: [
      { name: "Christine", value: 0 },
      { name: "Alex", value: 0 },
      { name: "Grey", value: 0 },
      { name: "Hopper", value: 0 },
    ],
  },
  {
    Contact: "",
    Date: "7/12/3",
    Job: "36067",
    Client: "furora International",
    Project: "Library Management",
    officeBudget: 0,
    Assess: 0,
    Wip: 0,
    toComplete: 0,
    painters: [
      { name: "Christine", value: 0 },
      { name: "Alex", value: 0 },
      { name: "Grey", value: 0 },
      { name: "Hopper", value: 0 },
    ],
  },
];

const LabourBoard = () => {


  const { register, control, watch, handleSubmit } = useForm();

  const allfields = watch();
  console.log(allfields);
  const onSubmit = (data) => console.log(data);
  const [wipVal,setWip] = useState('')


    // var filteredNames = Object.keys(myObj).filter((name) => /hour_0/.test(name));
    // console.log(filteredNames)
    let putArr = []
    LabourWorkData?.forEach((infoData,index) => {
        const regex = new RegExp(`hour__${index}`);
        // var filteredNames = Object.keys(allfields).filter((name) => /hour__0/.test(name));
        let filteredNames = Object.keys(allfields).filter((name) => regex.test(name));
        console.log(filteredNames)
        putArr.push(filteredNames)
    })
    console.log(putArr)
    let hourData = []
    putArr?.forEach((data,index) => {
       console.log(data)
       let filedData = []
       data?.forEach(sub => {
           console.log(allfields[sub])
          
        //   return
        filedData.push(allfields[sub])
       })
       console.log(filedData)
       hourData.push(filedData)
      
    })
    console.log(hourData)
   
    let withoutUndefined = []
    hourData?.forEach((hour,index) => {
        const dataFilter = hour?.filter(info => info !== undefined)
        // console.log(data)
        withoutUndefined.push(dataFilter)
    })
    console.log(withoutUndefined)

    let wipValue = []
    withoutUndefined?.forEach((hourData,index) => {
      let sumTotal = hourData.reduce(
        ( previousValue, currentValue ) =>   parseInt(previousValue)  +   parseInt(currentValue) ,
        0
      )
      console.log(sumTotal)
      wipValue.push(sumTotal)
    })
    console.log(wipValue)
    

 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TableContainer
        component={Paper}
        sx={{
          margin: 2,
          width: "100%",
          boxShadow: "none",
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
          borderTop: "1px solid black",
        }}
      >
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell
                colSpan="4"
                style={{
                  backgroundColor: "#b19cd9",
                  "text-align": "center",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                Project Labour Board
              </TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid black",
                  backgroundColor: "#b19cd9",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid black",
                  backgroundColor: "#b19cd9",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid black",
                  backgroundColor: "#b19cd9",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid black",
                  backgroundColor: "#b19cd9",
                }}
              ></TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                Painters
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                Status
              </TableCell>
              {painters?.map((name, index) => (
                <TableCell
                  sx={{
                    borderLeft: "1px solid black",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    fontWeight: "bold",
                  }}
                  key={index}
                >
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell>Contact</TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>Date</TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                {" "}
                Job no
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                Client
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                Project
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                Office Budget
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                Asseses
              </TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid black",
                  backgroundColor: "#addfad",
                }}
              >
                WIP
              </TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid black",
                  backgroundColor: "#b19cd9",
                }}
              >
                To Compelte
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}></TableCell>
              {painters?.map((name, index) => (
                <TableCell
                  sx={{ borderLeft: "1px solid black" }}
                  key={index}
                ></TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {LabourWorkData?.map((data, rowindex) => (
              <TableRow key={rowindex}>
                <TableCell>
                  <Controller
                    name={"contact" + "__" + rowindex}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        id="standard-basic"
                        variant="standard"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell sx={{ borderLeft: "1px solid black" }}>
                  <Controller
                    name={"date" + "__" + rowindex}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        id="standard-basic"
                        variant="standard"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell sx={{ borderLeft: "1px solid black" }}>
                  <Controller
                    name={"job" + "__" + rowindex}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        id="standard-basic"
                        variant="standard"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell sx={{ borderLeft: "1px solid black" }}>
                  <Controller
                    name={"client" + "__" + rowindex}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        id="standard-basic"
                        variant="standard"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell sx={{ borderLeft: "1px solid black" }}>
                  <Controller
                    name={"project" + "__" + rowindex}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        id="standard-basic"
                        variant="standard"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell sx={{ borderLeft: "1px solid black" }}>
                  <Controller
                    name={"officeBudget" + "__" + rowindex}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        id="standard-basic"
                        variant="standard"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell sx={{ borderLeft: "1px solid black" }}>
                  <Controller
                    name={"assess" + "__" + rowindex}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        id="standard-basic"
                        variant="standard"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: "1px solid black",
                    backgroundColor: "#addfad",
                  }}
                >
                  <Controller
                    name={"wip" + "__" + rowindex}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        id="standard-basic"
                        variant="standard"
                         value={wipValue[rowindex]}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: "1px solid black",
                    backgroundColor: "#b19cd9",
                  }}
                >
                  <Controller
                    name={"toComplete" + "__" + rowindex}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        id="standard-basic"
                        variant="standard"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell sx={{ borderLeft: "1px solid black" }}>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    variant="standard"
                    {...register("toComplete")}
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </TableCell>
                {data.painters?.map((info, index) => (
                  <TableCell sx={{ borderLeft: "1px solid black" }} key={index}>
                    <Controller
                      name={info.name + "__" + "hour" + "__" + rowindex}
                      control={control}
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          {...field}
                          id="standard-basic"
                          variant="standard"
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                      )}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
};

export default LabourBoard;
