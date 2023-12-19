import React from "react";
import PropTypes from "prop-types";
import BaseCard from "@/components/BaseCard";
import Icon from "@/components/Icon";

const SubscriptionCard = () => {
  return (
    <BaseCard isBorder={true} customStyle={"px-4 py-5"}>
      <div className="flex flex-row justify-center">
        <h2 className="text-sm">Go to premium</h2>
      </div>
      <div className="flex flex-row">
        <Icon
          icon={"illustrations/subscribe"}
          height={100}
          width={100}
          customStyle={""}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-lg font-semibold">Need more features?</div>
        <div className="text-sm text-gray-400">
          Update your account to premium to get more features.
        </div>
      </div>
      <div className="flex flex-row justify-center mt-4 gap-2">
        <button className="text-base text-gray-200 p-4 rounded-xl grow bg-[#4553DC]">
          Get now
        </button>
      </div>
    </BaseCard>
  );
};

export default SubscriptionCard;
