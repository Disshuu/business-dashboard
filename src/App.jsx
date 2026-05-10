import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [cityData, setCityData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [sourceData, setSourceData] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchCityData();
    fetchCategoryData();
    fetchSourceData();
    fetchBusinesses();

  }, []);

  const fetchCityData = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/city-wise"
      );

      setCityData(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const fetchCategoryData = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/category-wise"
      );

      setCategoryData(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const fetchSourceData = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/source-wise"
      );

      setSourceData(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const fetchBusinesses = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/all-businesses"
      );

      setBusinesses(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const filteredBusinesses = businesses.filter((item) =>
    item.business_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalBusinesses = businesses.length;
  const totalCities = cityData.length;
  const totalCategories = categoryData.length;
  const totalSources = sourceData.length;

  return (

    <div className="dashboard-container">

      {/* Header */}

      <div>

        <h1 className="dashboard-title">
          Business Intelligence Dashboard
        </h1>

        <p className="dashboard-subtitle">
          Real-time analytics and business insights platform
        </p>

      </div>

      {/* Summary Cards */}

      <div className="summary-grid">

        <div className="dashboard-card">

          <h3>Total Businesses</h3>

          <div className="card-number">
            {totalBusinesses}
          </div>

        </div>

        <div className="dashboard-card">

          <h3>Total Cities</h3>

          <div className="card-number">
            {totalCities}
          </div>

        </div>

        <div className="dashboard-card">

          <h3>Total Categories</h3>

          <div className="card-number">
            {totalCategories}
          </div>

        </div>

        <div className="dashboard-card">

          <h3>Total Sources</h3>

          <div className="card-number">
            {totalSources}
          </div>

        </div>

      </div>

      {/* Analytics Section */}

      <div className="analytics-grid">

        {/* City Wise */}

        <div className="dashboard-card">

          <h2>🌆 City Wise Analytics</h2>

          {
            cityData.map((item, index) => (

              <div
                key={index}
                className="analytics-item"
              >

                <span>{item.city}</span>

                <strong>{item.count}</strong>

              </div>

            ))
          }

        </div>

        {/* Category Wise */}

        <div className="dashboard-card">

          <h2>🏢 Category Analytics</h2>

          {
            categoryData.map((item, index) => (

              <div
                key={index}
                className="analytics-item"
              >

                <span>{item.category}</span>

                <strong>{item.count}</strong>

              </div>

            ))
          }

        </div>

        {/* Source Wise */}

        <div className="dashboard-card">

          <h2>🌐 Source Analytics</h2>

          {
            sourceData.map((item, index) => (

              <div
                key={index}
                className="analytics-item"
              >

                <span>{item.source}</span>

                <strong>{item.count}</strong>

              </div>

            ))
          }

        </div>

      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search businesses..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Business Table */}

      <div className="table-container">

        <h2 className="table-title">
          📋 Business Listings
        </h2>

        <table className="business-table">

          <thead>

            <tr>

              <th>Business Name</th>

              <th>Category</th>

              <th>City</th>

              <th>Address</th>

              <th>Phone</th>

              <th>Source</th>

            </tr>

          </thead>

          <tbody>

            {
              filteredBusinesses.map((item, index) => (

                <tr key={index}>

                  <td>{item.business_name}</td>

                  <td>{item.category}</td>

                  <td>{item.city}</td>

                  <td>{item.address}</td>

                  <td>{item.phone}</td>

                  <td>{item.source}</td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="footer">

        Developed by Divya Ramnani 🚀

      </div>

    </div>

  );
}

export default App;