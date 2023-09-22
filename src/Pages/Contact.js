import {
  Grid,
  TextField,
  Container,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useEffect, useState } from "react";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";

const Contact = () => {
  //=============== database connection =====================
  const db = getDatabase();

  //================= All State Colling hear =================
  const [switchs, setSwitchs] = useState();
  const [ids, setIds] = useState("");
  const [store, setStore] = useState([]);
  const [info, setInfo] = useState({
    username: "",
    email: "",
    designation: "",
    position: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //===================== Reset Data form field =====================

  const handleReset = () => {
    setInfo({
      username: "",
      email: "",
      designation: "",
      position: "",
    });
  };
  //===================== Stores the data in the database =====================
  const handleSubmit = () => {
    if (info.username && info.email && info.designation && info.position) {
      set(push(ref(db, "users")), {
        username: info.username,
        email: info.email,
        designation: info.designation,
        position: info.position,
      }).then(() => {
        setInfo({
          username: "",
          email: "",
          designation: "",
          position: "",
        });
      });
    } else {
      alert("Please fill in the blanks of the input");
    }
  };

  // ============================ Fetch data from database============================
  useEffect(() => {
    const starCountRef = ref(db, "users");
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key });
      });
      setStore(arr);
    });
  }, [db]);

  //============================ Remove data from database============================
  const handleDelete = (id) => {
    remove(ref(db, "users/" + id));
  };

  //============================= Edit data frome browser =============================
  const handleEdit = (item) => {
    setInfo({
      username: item.username,
      email: item.email,
      designation: item.designation,
      position: item.position,
    });
    setIds(item.id);
    setSwitchs(true);
  };

  const handleUpdate = () => {
    setSwitchs(false);
    if (info.username && info.email && info.designation && info.position) {
      update(ref(db, "users/" + ids), {
        username: info.username,
        email: info.email,
        designation: info.designation,
        position: info.position,
      }).then(() => {
        setInfo({
          username: "",
          email: "",
          designation: "",
          position: "",
        });
      });
    } else {
      alert("Please fill in the blanks of the input");
    }
  };

  return (
    <>
      <form action="">
        <Container>
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} sm={10} md={8} lg={6} xl={4} mx={"auto"}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="standard"
                    name="username"
                    value={info.username}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="standard"
                    name="email"
                    value={info.email}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} mt={0.25}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Designation"
                    variant="standard"
                    name="designation"
                    value={info.designation}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Position"
                    variant="standard"
                    name="position"
                    value={info.position}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              {/*============== Action Button from using contact form ============== */}
              <Grid item textAlign={"center"} mt={5}>
                <Button>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ marginRight: "20px" }}
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </Button>

                {switchs ? (
                  <Button variant="contained" onClick={handleUpdate}>
                    Update
                  </Button>
                ) : (
                  <Button variant="contained" onClick={handleSubmit}>
                    Submit
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </form>

      <Grid container mt={5}>
        <Grid item xs={12} sm={11} md={10} lg={8} xl={6} mx={"auto"}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Designation</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {store.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.username}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.designation}</TableCell>
                    <TableCell>{item.position}</TableCell>
                    <TableCell>
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        onClick={() => handleEdit(item)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton color="secondary">
                        <RemoveRedEyeIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
