import React from 'react'
import './calculator.component.scss';

import { Container, Row, Col } from 'react-bootstrap';

import { DefaultButton, TextField, PrimaryButton, Stack } from 'office-ui-fabric-react';

export default function Calculator() {
    return (
        <div className="calculator">
            <Container>
                <Row>
                    <Col className="calculationColumn" xs={12}>
                        <TextField readOnly className="calcField"></TextField>
                    </Col>
                </Row>
                <Row>
                    <Col className="buttonColumn" xs={4}>
                        <DefaultButton>1</DefaultButton>
                    </Col>
                    <Col className="buttonColumn" xs={4}>
                        <DefaultButton>2</DefaultButton>
                    </Col>
                    <Col className="buttonColumn" xs={4}>
                        <DefaultButton>3</DefaultButton>
                    </Col>
                </Row>
                <Row>
                    <Col className="buttonColumn" xs={4}>
                        <DefaultButton>4</DefaultButton>
                    </Col>
                    <Col className="buttonColumn" xs={4}>
                        <DefaultButton>5</DefaultButton>
                    </Col>
                    <Col className="buttonColumn" xs={4}>
                        <DefaultButton>6</DefaultButton>
                    </Col>
                </Row>
                <Row>
                    <Col className="buttonColumn" xs={4}>
                        <DefaultButton>7</DefaultButton>
                    </Col>
                    <Col className="buttonColumn" xs={4}>
                        <DefaultButton>8</DefaultButton>
                    </Col>
                    <Col className="buttonColumn" xs={4}>
                        <DefaultButton>9</DefaultButton>
                    </Col>
                </Row>
                <Row>
                    <Col className="buttonColumn" xs={4}>
                        <PrimaryButton>+</PrimaryButton>
                    </Col>
                    <Col className="buttonColumn" xs={4}>
                        <PrimaryButton>-</PrimaryButton>
                    </Col>
                    <Col className="buttonColumn" xs={4}>
                        <PrimaryButton>=</PrimaryButton>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
