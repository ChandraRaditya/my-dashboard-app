import ActivityCard from "@/components/ActivityCard";
import AnalyticCard from "@/components/AnalyticCard";
import BalanceCard from "@/components/BalanceCard";
import CreditCard from "@/components/CreditCard";
import Icon from "@/components/Icon";
import SubscriptionCard from "@/components/SubscriptionCard";
import TransactionCard from "@/components/TransactionCard";
import "@/styles/page.scss";

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
      image: "avatars/avatar3",
      name: "Guy Hawkins",
      date: new Date(),
      total: 3000,
      detail: "incoming",
    },
    {
      image: "avatars/avatar4",
      name: "Alan Smith",
      date: new Date(),
      total: 3000,
      detail: "outgoing",
    },
    {
      image: "avatars/avatar5",
      name: "Erwin Fritz",
      date: new Date(),
      total: 3000,
      detail: "incoming",
    },
    {
      image: "avatars/avatar6",
      name: "George Brown",
      date: new Date(),
      total: 3000,
      detail: "incoming",
    },
  ];
  return (
    <div className="home-page">
      <div className="home-page__container-top">
        <div className="home-page__container-infromation">
          <h1 className="home-page__greeting">Hello, Jhon .D</h1>
          <div className="home-page__information-text">
            View and control your finances here!
          </div>
        </div>
        <Icon
          icon={"icons/search"}
          height={20}
          width={20}
          customStyle={"home-page__search"}
        />
      </div>
      <div className="home-page__container-content">
        <div className="home-page__grid-balance">
          <div className="home-page__card-container">
            <BalanceCard />
          </div>
        </div>
        <div className="home-page__grid-credit">
          <div className="home-page__card-container">
            <CreditCard
              name={"Jhon Demon"}
              cardNumber={"21239838"}
              expiredDate={new Date()}
            />
          </div>
        </div>
        <div className="home-page__grid-activity">
          <div className="home-page__card-container">
            <ActivityCard />
          </div>
        </div>
        <div className="home-page__grid-transaction">
          <div className="home-page__card-container">
            <TransactionCard transactionData={transactionData} />
          </div>
        </div>
        <div className="home-page__grid-analytic">
          <div className="home-page__card-container">
            <AnalyticCard />
          </div>
        </div>
      </div>
    </div>
  );
}
