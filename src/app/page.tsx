import ActivityCard from "@/components/ActivityCard";
import AnalyticCard from "@/components/AnalyticCard";
import BalanceCard from "@/components/BalanceCard";
import CreditCard from "@/components/CreditCard";
import Icon from "@/components/Icon";
import SubscriptionCard from "@/components/SubscriptionCard";
import TransactionCard from "@/components/TransactionCard";
import Image from "next/image";

interface TransactionData {
  image: string;
  name: string;
  date: Date;
  total: number;
  detail: "incoming" | "outgoing";
}

export default function Home() {
  const transactionData: TransactionData[] = [
    {
      image: "avatars/avatar2",
      name: "Bessie Cooper",
      date: new Date(),
      total: 3000,
      detail: "outgoing",
    },
    {
      image: "avatars/avatar2",
      name: "Bessie Cooper",
      date: new Date(),
      total: 3000,
      detail: "incoming",
    },
    {
      image: "avatars/avatar2",
      name: "Bessie Cooper",
      date: new Date(),
      total: 3000,
      detail: "outgoing",
    },
    {
      image: "avatars/avatar2",
      name: "Bessie Cooper",
      date: new Date(),
      total: 3000,
      detail: "incoming",
    },
    {
      image: "avatars/avatar2",
      name: "Bessie Cooper",
      date: new Date(),
      total: 3000,
      detail: "incoming",
    },
  ];
  return (
    <div className="grid grid-rows-[80px_auto] h-full items-start">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Hello, Jhon .D</h1>
          <div className="font-light">View and control your finances here!</div>
        </div>
        <Icon
          icon={"icons/search"}
          height={20}
          width={20}
          customStyle={"bg-white p-2 cursor-pointer"}
        />
      </div>
      <div className="grid grid-cols-10 grid-rows-[250px_280px_250px] gap-x-10 gap-y-6 h-auto pb-8">
        <div className="col-span-6">
          <div className="h-full">
            <BalanceCard />
          </div>
        </div>
        <div className="col-span-4">
          <div className="h-full">
            <CreditCard
              name={"Jhon Demon"}
              cardNumber={"21239838"}
              expiredDate={new Date()}
            />
          </div>
        </div>
        <div className="col-span-10">
          <ActivityCard />
        </div>
        <div className="col-span-7">
          <TransactionCard transactionData={transactionData} />
        </div>
        <div className="col-span-3">
          <div className="h-full">
            <AnalyticCard />
          </div>
        </div>
      </div>
    </div>
  );
}
