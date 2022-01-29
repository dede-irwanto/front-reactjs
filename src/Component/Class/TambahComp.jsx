import axios from "axios";
import React, { Component } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
const api = "http://localhost:3001/";

class TambahComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nim: "",
      nama: "",
      jurusan: "",
      response: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  addMahasiswa = () => {
    axios
      .post(api + "tambah", {
        nim: this.state.nim,
        nama: this.state.nama,
        jurusan: this.state.jurusan,
      })
      .then((json) => {
        if (json.data.status === 200) {
          this.setState({
            response: json.data.values,
          });
        }
      });
  };

  render() {
    return (
      <div>
        <Container>
          <h4 className="mt-3">Form Tambah Data</h4>
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
                  Submit
                </Button>
              </FormGroup>
            </Col>
          </Form>
        </Container>
      </div>
    );
  }
}

export default TambahComp;
