import axios from "axios";
import e from "cors";
import React, { Component } from "react";
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
import qs from "querystring";

import { withRouter } from "react-router";

const api = "http://localhost:3001";

class EditComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mahasiswa: [],
      response: "",
      display: "none",
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchData(id);
    axios.get(api + "/tampil/").then((res) => {
      this.setState({ mahasiswa: res.data.values[0] });
    });
  }

  handleChange = () => {
    this.setState({ [e.target.name]: e.target.value });
  };

  ubahMahasiswa = (idmahasiswa) => {
    const data = qs.stringify({
      id_mahasiswa: this.state.id_mahasiswa,
      nim: this.state.nim,
      nama: this.state.nama,
      jurusan: this.state.jurusan,
    });

    axios.put(api + "/ubah", data).then((json) => {
      if (json === 200) {
        this.setState({
          response: json.data.values,
          display: "block",
        });
      } else {
        this.setState({
          response: json.data.values,
          display: "block",
        });
      }
    });
  };
  render() {
    return (
      <div>
        <Container>
          <h4 className="mt-3">Form Tambah Data</h4>
          <Alert color="success" style={{ display: this.state.display }}>
            {this.state.response}
          </Alert>
          <Form className="form">
            <Col>
              <Label>NIM</Label>
              <FormGroup>
                <Row>
                  <Col>
                    <Input
                      type="text"
                      name="nim"
                      value={this.state.nim}
                      onChange={this.handleChange}
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
                      value={this.state.nama}
                      onChange={this.handleChange}
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
                      value={this.state.jurusan}
                      onChange={this.handleChange}
                      placeholder="Masukkan Jurusan"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Button type="button" onClick={this.addMahasiswa}>
                  Update
                </Button>
              </FormGroup>
            </Col>
          </Form>
        </Container>
      </div>
    );
  }
}

export default EditComp;
