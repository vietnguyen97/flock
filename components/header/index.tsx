import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import { SHeader } from "./styled";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <SHeader>
        <Row>
          <Col xl={12}>
            <div className="head-left">
              <Image
                alt="logo"
                src="/image/home/logo-head.png"
                width={121}
                height={48}
                className="logo-image pointed"
                onClick={() => router.push("/")}
              />
              <div className="wrap-left-head">
                <div className="content">
                  <span>Trang chủ</span>
                </div>
                <div className="content">
                  <span>Dự án</span>
                </div>
                <div className="content">
                  <span>Kiến Thức</span>
                </div>
                <div className="content">
                  <span>Sự kiện</span>
                </div>
                <div className="content">
                  <span>Liên Hệ</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={12} className="wrap-login">
            <div className="wrap-right-head">
              <button className="btn btn-sign-up pointed">Đăng Ký</button>
              <button
                className="btn btn-sign-in pointed"
                onClick={() => router.push("/sign-in")}
              >
                Đăng Nhập
              </button>
            </div>
          </Col>
        </Row>
      </SHeader>
    </>
  );
};

export default Header;
