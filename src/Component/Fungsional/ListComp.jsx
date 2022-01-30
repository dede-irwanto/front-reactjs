import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, NavLink, Button, Table, Alert } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const api = "http://localhost:3001";

const ListComp = () => {
  const [mahasiswa, setMahasiswa] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fectData();
  }, []);

  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get(api + "/tampil");
    //get response data
    const data = await response.data.values;

    //assign response data to state "posts"
    setMahasiswa(data);
  };

  return (
    <div>
      <Container>
        <h2>Data Mahasiswa</h2>
        {location.state != null ? (
          <Alert variant="danger">{location.state.message}</Alert>
        ) : (
          ""
        )}
        <NavLink href="/mahasiswa/tambah">
          <Button color="primary">Tambah Data</Button>
        </NavLink>
        <hr />
        <Table className="table-bordered">
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((mahasiswa) => (
              <tr key={mahasiswa.id_mahasiswa}>
                <td>{mahasiswa.nim}</td>
                <td>{mahasiswa.nama}</td>
                <td>{mahasiswa.jurusan}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/mahasiswa/edit/${mahasiswa.id_mahasiswa}`,
                    }}
                    state={{
                      id_mahasiswa: mahasiswa.id_mahasiswa,
                      nim: mahasiswa.nim,
                      nama: mahasiswa.nama,
                      jurusan: mahasiswa.jurusan,
                    }}
                  >
                    <Button>Edit</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ListComp;
