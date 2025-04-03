import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import Loader from "./Loader";

const { Title } = Typography;

const Home = ({ userName }) => {
  const { data, isFetching } = useGetCryptosQuery(10);
  if (isFetching) return <Loader />;

  const globalStats = data?.data?.stats;

  return (
    <>
      {/* Welcome Message */}
      <div style={styles.welcomeContainer}>
        <Title level={3} style={styles.welcomeText}>
          Welcome, {userName} 👋
        </Title>
        <p style={styles.subText}>Explore the latest crypto market trends.</p>
      </div>

      {/* Global Crypto Stats */}
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>

      <Cryptocurrencies simplified />
    </>
  );
};

const styles = {
  welcomeContainer: {
    textAlign: "center",
    marginBottom: "20px",
    padding: "10px",
    backgroundColor: "#001529",
    borderRadius: "8px",
    color: "white",
  },
  welcomeText: {
    color: "#fff",
    marginBottom: "5px",
  },
  subText: {
    fontSize: "16px",
    color: "#ddd",
  },
};

export default Home;
