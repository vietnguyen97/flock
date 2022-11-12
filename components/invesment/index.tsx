import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import { SInvesment } from "./style";

const Invesment = () => {
  return (
    <SInvesment>
      <div className="wrap">
        <div className="wrap-item">
          <span className="common">Gọi Vốn &</span>
          <br />
          <span className="common">Đầu Tư</span>
          <br />
          <span className="common one-platform">Trên 01 Nền Tảng</span>
          <br />
          <span className="content">
            Flocks AI là nền tảng dành cho người Việt, hỗ trợ thẩm định doanh
          </span>
          <br />
          <span className="content">
            nghiệp và kết nối với nguồn vốn cộng đồng Việt Nam.
          </span>
        </div>
      </div>
      <div className="title-tech">
        <div className="head">
          <span className="tech">Cố Vấn Chuyên Môn</span>
          <br />
          <span>Chúng tôi cần bạn!</span>
        </div>
        <div className="content">
          <span>
            Để giúp hàng nghìn nhà đầu tư có định hướng phù hợp trong các doanh
            nghiệp.
          </span>
          <br />
          <span>
            Flocks AI cần sự tư vấn từ các chuyên gia trong đa dạng lĩnh vực
            trên thị trường.
          </span>
        </div>
        <Row>
          <Col xl={12}>
            <div className="img-consul">
              <Image
                alt="people"
                src="/image/home/people.png"
                width={546}
                height={383}
              />
            </div>
          </Col>
          <Col xl={12}>
            <div className="wrap-btn">
              <div className="btn">
                <button>Trở thành Cố Vấn Chuyên Môn</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </SInvesment>
  );
};

export default Invesment;
