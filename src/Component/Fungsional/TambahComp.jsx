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

  // validation
  const [validation, setValidation] = useState(new Map());

  // history
  const navigate = useNavigate();

  // method tambahMahasiswa
  const tambahMahasiswa = async (e) => {
    e.preventDefault();

    if (nim !== "" && nama !== "" && jurusan !== "") {
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
              message: "Data berhasil ditambahkan!",
            },
          });
        });
    } else {
      const errors = [];

      if (nim === "") {
        errors.push("NIM");
      }
      if (nama === "") {
        errors.push("Nama");
      }
      if (jurusan === "") {
        errors.push("Jurusan");
      }

      const updateValidation = (k, errors) => {
        setValidation(new Map(validation.set(k, errors)));
      };
    }
  };

  return (
    <div>
      <Container>
        <h4 className="mt-3">Form Tambah Data</h4>
        <ul>
          {[...validation.keys()].map((k) => (
            <li key={k}>validation.get(k)</li>
          ))}
        </ul>
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
