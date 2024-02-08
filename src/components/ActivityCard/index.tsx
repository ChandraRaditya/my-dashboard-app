"use client";

import React, { useRef, useState } from "react";
import BaseCard from "@/components/BaseCard";
import Icon from "@/components/Icon";
import "./index.scss";

interface ShoppingItem {
  item: string;
  isChecked: boolean;
}

interface ChatMessage {
  user: string;
  text: string;
}

const ActivityCard = () => {
  const [input, setInput] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<Array<ChatMessage>>([
    {
      user: "me",
      text: "Are you ready?",
    },
    {
      user: "friend",
      text: "I have prepared everything",
    },
  ]);

  const items = [
    {
      item: "Macbook",
      isChecked: false,
    },
    {
      item: "Motorcycle",
      isChecked: false,
    },
    {
      item: "Bicycle",
      isChecked: false,
    },
    {
      item: "Iphon 14 pro max",
      isChecked: false,
    },
  ];

  const onSendMessage = () => {
    setMessage((message) => [...message, { user: "me", text: input }]);
    setInput("");

    divRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      onSendMessage();
    }
  };

  return (
    <BaseCard isBorder={false} customStyle={"activity-card"}>
      <div className="list">
        <h2 className="list__title">List of items to buy </h2>
        <div className="list__container-time">
          <div className="list__date-section">
            <div className="list__time">02:00</div>
            <div className="list__date">Sat, August 12</div>
          </div>
          <Icon
            icon={"icons/arrow-right"}
            height={20}
            width={20}
            customStyle={""}
          />
          <div className="list__date-section">
            <div className="list__time">02:00</div>
            <div className="list__date">Sat, August 12</div>
          </div>
        </div>
        <div className="list__container-information">
          <div className="list__item-total">
            <span className="list__item-number">0/3 </span>Shopping list
          </div>
          <button className="list__button-add">
            <Icon
              icon={"icons/plus"}
              height={15}
              width={15}
              customStyle={"list__button-icon"}
            />
            <div>Add items</div>
          </button>
        </div>
        <div className="list__container-item">
          {items.map((value: ShoppingItem, index: number) => {
            return (
              <div key={index} className="item">
                <div className="item__content">
                  <input
                    className="item__checkbox"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label>{value.item}</label>
                </div>
                <Icon
                  icon={"icons/option"}
                  height={20}
                  width={20}
                  customStyle={"item__add-icon"}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="chat">
        <div className="chat__name">Esther Howard</div>
        <div className="chat__container-text">
          {message.map((value: ChatMessage, index: number) => {
            const isMe = value.user == "me";
            return (
              <div
                key={index}
                className={`chat__section ${
                  isMe ? "chat__section--right" : "chat__section--left"
                }`}
              >
                <div
                  className={`${
                    isMe ? "chat__bubble--right" : "chat__bubble--left"
                  } chat__bubble`}
                >
                  {value.text}
                </div>
                <Icon
                  icon={isMe ? "avatars/avatar2" : "avatars/avatar4"}
                  height={40}
                  width={40}
                  customStyle={"chat__bubble-icon"}
                />
              </div>
            );
          })}
          <div ref={divRef} className="chat__bottom-text" />
        </div>
        <div className="chat__container-input">
          <textarea
            className="chat__input"
            rows={3}
            placeholder="Type your message"
            value={input}
            onChange={(event) => setInput(event?.target?.value)}
            onKeyDown={(event: React.KeyboardEvent<HTMLTextAreaElement>) =>
              handleKeyDown(event)
            }
          />
          <div className="chat__container-button">
            <div className="chat__action-section">
              <button className="chat__button--action">
                <Icon
                  icon={"icons/emoticon"}
                  height={20}
                  width={20}
                  customStyle={""}
                />
              </button>
              <button className="chat__button--action">
                <Icon
                  icon={"icons/attachment"}
                  height={20}
                  width={20}
                  customStyle={""}
                />
              </button>
            </div>
            <button onClick={onSendMessage} className="chat__button--send">
              Send now
            </button>
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default ActivityCard;
