import React from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import BarChart from "../../components/BarChart/BarChart";
import AddBalanceForm from "../../components/Forms/AddBalanceForm/AddBalanceForm";

const Home = () => {
  return (
    <div>
      <Button />
      <Card />
      <BarChart />
      <AddBalanceForm />
    </div>
  );
};

export default Home;
