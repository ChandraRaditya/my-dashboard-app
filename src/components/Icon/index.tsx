import React from "react";
import Image from "next/image";
import "./index.scss";

interface props {
  icon: string;
  width: number;
  height: number;
  customStyle?: string;
  isActive?: boolean;
}
const Icon: React.FC<props> = (props) => {
  return (
    <div className={`${props.customStyle} icon`}>
      <Image
        className={`${props.isActive && "icon__image"}`}
        src={require(`@/assets/${props.icon}.svg`)}
        width={props.width}
        height={props.height}
        alt={`${props.icon}-icon`}
      />
    </div>
  );
};

Icon.defaultProps = {
  icon: "home",
  width: 20,
  height: 20,
  customStyle: "",
  isActive: false,
};

export default Icon;
