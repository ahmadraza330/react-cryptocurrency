import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [crypto, setCrypto] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterdData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCrypto(filterdData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;
  return (
    <>
      {!simplified && (
        <div className="search-crypto ">
          <input
            type="text"
            placeholder="Search Cryptocurrencies"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {crypto?.map((cry) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={cry.id}>
            <Link to={`/crypto/${cry.id}`}>
              <Card
                title={`${cry.rank} . ${cry.name}`}
                extra={<img className="crypto-image" src={cry.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(cry.price)}</p>
                <p>Market Cap: {millify(cry.marketCap)}</p>
                <p>Daily Change: {millify(cry.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
