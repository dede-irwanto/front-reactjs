import React from "react";

const TambahComp = () => {
  return (
    <div>
      <Container>
        <h4 className="mt-3">Form Tambah Data</h4>
        {/* <Alert color="success" style={{ display: this.state.display }}>
          {this.state.response}
        </Alert> */}
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
};

export default TambahComp;
