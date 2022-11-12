import { Col, Row } from "antd";
import React from "react";
import Header from "../../components/header";
import SigninIndex from "../../components/sign-in";
import { SSignInPage } from "./styled";

const SignInPage = () => {
  return (
    <>
      <SSignInPage>
        <Row justify="center">
          <Col span={20}>
            <Header />
          </Col>
        </Row>
        <SigninIndex />
      </SSignInPage>
    </>
  );
};

export default SignInPage;
