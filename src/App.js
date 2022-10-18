import { Box } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import Service from "./api";


function App() {
  const [users, setUsers] = useState("")
  const [filters, setFilters] = useState("")

  const service = new Service()
  useEffect(() => {
    service.userService().then(result => {
      setUsers(result.data)
      console.log(users)
    })
  }, [])

  const search = () => {
    const filterUsers = users.filter((item) => { item.name.toLowerCase().includes(filters) })
    return setUsers(filterUsers)
  }


  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <TextField onChange={(e) => {setFilters(e.target.value) }} id="outlined-basic" label="Users Name" variant="outlined" />
      </Box>
      <Box sx={{ display: "flex", flexDirection:"column" , alignItems: "center", justifyContent: "center" }}>
        <List>
        {
          users ? users.filter((ite) => {
            if (filters === "") {
              return ite
            } else if (ite.name.toLowerCase().includes(filters.toLowerCase())){
              return ite
            }
          }).map((item, i) => {
            return <ListItem sx={{border: 1, borderColor:"purple" , marginY:1}}>{item.name}</ListItem>
          }) : null
        }
        </List>
      </Box>
    </>
  );
}

export default App;
