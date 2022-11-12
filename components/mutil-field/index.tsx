import Image from "next/image";
import React from "react";
import { SMutilField } from "./styled";

const MutilField = () => {
  return (
    <>
      <SMutilField>
        <div className="title">
          <span>Gọi vốn Đa lĩnh vực - Đa loại hình</span>
        </div>
        <Image
          alt="field"
          src="/image/home/field.png"
          width={1171}
          height={573}
        />
        <div className="sub-title title">
          <span>Flocks AI hoạt động như thế nào?</span>
        </div>
        <Image
          alt="sub-field"
          src="/image/home/sub-field.png"
          width={1171}
          height={573}
        />
      </SMutilField>
    </>
  );
};

export default MutilField;
