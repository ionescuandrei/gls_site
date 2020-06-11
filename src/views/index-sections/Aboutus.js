import React from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Button,
} from "reactstrap";

export default function AboutUs() {
  return (
    <Container>
      <h1 className="title" style={{ textAlign: "center", padding: 15 }}>
        Despre noi
      </h1>
      <Row>
        <Col md="6">
          <Card className="card-profile card-plain">
            <div className="card-avatar">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img alt="..." src={require("assets/img/faces/and1.jpg")} />
              </a>
            </div>
            <CardBody>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <div className="author">
                  <CardTitle tag="h4">Andrei Ionescu</CardTitle>
                  <h6 className="card-category">Fotograf</h6>
                </div>
              </a>
              <p className="card-description text-center">
                Sunt Ionescu Andrei, fotograf nuntă din Craiova care surprind
                momente de de bucurie în cadrului unui eveniment din viața
                dumneavoastră. Sunt pasionat de fotografie ceea ce aduce o
                abordare relaxată. Imi plac cadrele naturale și vibrante, care
                au o notă de romantism și multă distracție. Sunt alături de voi
                să fotografiez distracția, râsul, emoția și frumusețea zilei
                nunții tale.
              </p>
            </CardBody>
            <CardFooter className="text-center">
              <Button
                className="btn-just-icon btn-neutral"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter" />
              </Button>
              <Button
                className="btn-just-icon btn-neutral ml-1"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-google-plus" />
              </Button>
              <Button
                className="btn-just-icon btn-neutral ml-1"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-linkedin" />
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col md="6">
          <Card className="card-profile card-plain">
            <div className="card-avatar">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img alt="..." src={require("assets/img/faces/ion.jpg")} />
              </a>
            </div>
            <CardBody>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <div className="author">
                  <CardTitle tag="h4">Ionut Dinu</CardTitle>
                  <h6 className="card-category">Videograf</h6>
                </div>
              </a>
              <p className="card-description text-center">
                A group becomes a team when each member is sure enough of
                himself and his contribution to praise the skill of the others.
                No one can whistle a symphony. It takes an orchestra to play it.
              </p>
            </CardBody>
            <CardFooter className="text-center">
              <Button
                className="btn-just-icon btn-neutral"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter" />
              </Button>
              <Button
                className="btn-just-icon btn-neutral ml-1"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-google-plus" />
              </Button>
              <Button
                className="btn-just-icon btn-neutral ml-1"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-linkedin" />
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
