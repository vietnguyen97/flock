import { Checkbox, Col, Input, Row } from "antd";
import React from "react";
import CustomForm from "../custom-form";
import { SSigninIndex } from "./styled";
import { useForm } from "react-hook-form";
import { SigninInput } from "./interface";

const SigninIndex: React.FC<SigninInput> = (props) => {
  const { size } = props;
  const { control } = useForm();
  return (
    <>
      <SSigninIndex size={size <= 414 ? true : false}>
        <div className="wrap-sign-in">
          <div className="wrap-content">
            <div className="hello">
              <span>Xin chào !👋</span>
            </div>
            <div className="hello-content">
              <div className="welcome">Chào mừng bạn đến với Flocks AI!</div>
              <br />
              <span className="no-account">
                Chưa có tài khoản?
                <span className="sign-up-here"> Đăng ký tại đây!</span>
              </span>
            </div>
            <Row>
              <Col xl={12} xs={24}>
                <CustomForm
                  name="email"
                  label="Email đăng nhập"
                  classNameWrap="custom-sign-in-group"
                  classNameForm="custom-sign-in-item"
                  control={control}
                  render={({ field }: any) => (
                    <Input
                      placeholder="Email của bạn"
                      {...field}
                      autoComplete="false"
                    />
                  )}
                />
                <CustomForm
                  name="password"
                  label="Mật khẩu"
                  classNameForm="custom-sign-in-item"
                  control={control}
                  render={({ field }: any) => (
                    <Input.Password
                      placeholder="Mật khẩu"
                      {...field}
                      autoComplete="false"
                    />
                  )}
                />
              </Col>
            </Row>
            <div className="rules">
              <Checkbox>
                <div>
                  <span>Bằng cách đăng nhập, bạn đã đồng ý với </span>
                  <span className="link-rule">Điều khoản</span>
                  <br />
                  <span>và </span>
                  <span className="link-rule">Bảo mật </span>
                  <span>tại Flocks AI.</span>
                </div>
              </Checkbox>
            </div>
            <div className="wrap-btn-login">
              <button className="sign-up">Đăng nhập</button>
              <button className="google">Google</button>
              <button className="facebook">Facebook</button>
              <button className="apple">Apple</button>
            </div>
          </div>
        </div>
      </SSigninIndex>
    </>
  );
};

export default SigninIndex;
