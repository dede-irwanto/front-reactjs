import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const api = "http://localhost:3001";

const TambahComp = () => {
  // state
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [response, setResponse] = useState("");

  // state validation
  const [validation, setValidation] = useState({});

  // history
  const navigate = useNavigate();

  // method tambahMahasiswa
  const tambahMahasiswa = async (e) => {
    e.preventDefault();

    // kirim data ke server
    await axios
      .post(api + "/tambah", {
        nim: nim,
        nama: nama,
        jurusan: jurusan,
      })
      .then((json) => {
        // redirect
        navigate("/mahasiswa", {
          state: {
            response: json.data.values,
          },
        });
      });
  };

  return (
    <div>
      <Container>
        <h4 className="mt-3">Form Tambah Data</h4>
        {validation.errors && (
          <Alert variant="danger">
            <ul class="mt-0 mb-0">
              {validation.errors.map((error, index) => (
                <li key={index}>{`${error.param} : ${error.msg}`}</li>
              ))}
            </ul>
          </Alert>
        )}
        <Form onSubmit={tambahMahasiswa}>
          <Col>
            <Label>NIM</Label>
            <FormGroup>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="nim"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    placeholder="Masukkan NIM"
                  />
                </Col>
              </Row>
            </FormGroup>
            <Label>Nama</Label>
            <FormGroup>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan Nama"
                  />
                </Col>
              </Row>
            </FormGroup>
            <Label>Jurusan</Label>
            <FormGroup>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="jurusan"
                    value={jurusan}
                    onChange={(e) => setJurusan(e.target.value)}
                    placeholder="Masukkan Jurusan"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    </div>
  );
};

export default TambahComp;
