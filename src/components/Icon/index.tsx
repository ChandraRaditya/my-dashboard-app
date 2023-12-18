import React from "react";
import Image from "next/image";

interface props {
  icon: string;
  width: number;
  height: number;
  customStyle?: string;
  isActive?: boolean;
}
const Icon: React.FC<props> = (props) => {
  return (
    <div className={`rounded-full ${props.customStyle} text-white`}>
      <Image
        className={`${
          props.isActive &&
          "transition delay-150 duration-500 ease-in-out dark:invert"
        }`}
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
