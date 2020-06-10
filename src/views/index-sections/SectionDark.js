import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Fotograf eveniment zona Olteniei </h2>
              <p className="description">
                Bine ai venit la Golden Lens Studio. Sunt Ionescu Andrei,
                fotograf nuntă din Craiova care surprind momente de de bucurie
                în cadrului unui eveniment din viața dumneavoastră. Sunt
                pasionat de de fotografie ceea ce aduce o abordare relaxată. Imi
                plac cadrele naturale și vibrante, care au o notă de romantism
                și multă distracție. Sunt alături de voi să fotografiez
                distracția, râsul, emoția și frumusețea zilei nunții tale.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
