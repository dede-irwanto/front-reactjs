import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const CardComp = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{props.judul}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.tanggal}
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Link
            to={{ pathname: `/detail/${props.id}` }}
            state={{ judul: props.judul, tanggal: props.tanggal }}
          >
            <Button>Detail</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComp;
