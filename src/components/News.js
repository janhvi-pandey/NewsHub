import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner.js";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";

const News = (props) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const updateNews = async () => {
    props.setProgress(20);
    const url = `https://newsdata.io/api/1/latest?apikey=${props.apikey}&country=${props.country}&category=${props.category}&language=${props.language}`;
    setLoading(true);
    props.setProgress(50);
    try {
      const response = await fetch(url);
      const parsedData = await response.json();

      setResults(Array.isArray(parsedData.results) ? parsedData.results : []);
      setTotalResults(parsedData.totalResults || 0);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setResults([]);
    }
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsdata.io/api/1/latest?apikey=${props.apikey}&country=${props.country}&category=${props.category}&language=${props.language}&page=${nextPage}`;
    try {
      const response = await fetch(url);
      const parsedData = await response.json();

      setResults((prevResults) => [
        ...prevResults,
        ...(Array.isArray(parsedData.results) ? parsedData.results : []),
      ]);
      setTotalResults(parsedData.totalResults || 0);
      setPage(nextPage);
    } catch (error) {
      console.error("Failed to fetch more news:", error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const category = searchTerm.toLowerCase().trim();
    
    if (!category) {
      alert("Please enter category.🤗");
      return;
    }
  
    if (
      [
        "education",
        "sports",
        "business",
        "entertainment",
        "health",
        "science",
        "tourism",
        "technology",
      ].includes(category)
    ) {
      navigate(`/${category}`);
    } else {
      alert("No News Available! Try Other Category🤔");
    }
  };
  
  const getHeadline = () => {
    if (props.category === "crime,world,business,sports,lifestyle") {
      return "Top stories around the globe";
    } else {
      const categoryFormatted =
        props.category.charAt(0).toUpperCase() + props.category.slice(1);
      return `Top Headlines in ${categoryFormatted} Domain`;
    }
  };

  return (
    <div className="container my-5">
      <div>
        <h4
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginTop: "110px",
            marginBottom: "4px",
            color: props.mode === "light" ? "#AD1457" : "#EC407A",
          }}
        >
          NewsHub:&nbsp;
          <span
            className="highlightHeading"
            id="typingtext"
            style={{
              color: "#1565C0",
              fontWeight: "500",
              fontSize: "1.6rem",
            }}
          >
            <ReactTyped
              strings={[
                "Your Daily Dose of Breaking News & Insights",
                "Unveiling Today's Most Important Stories",
                "Your Front-Row Seat to Today’s Major News Events",
              ]}
              typeSpeed={100}
              loop
            />
          </span>
        </h4>
      </div>
      <div className="row d-flex justify-content-between align-items-center my-3">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <h3
            style={{
              color: props.mode === "dark" ? "white" : "#191919",
              marginTop: "20px",
            }}
          >
            {getHeadline()}
          </h3>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-md-end">
          <form
            onSubmit={handleSearch}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              width: "100%",
            }}
          >
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                marginRight: "10px",
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "5px 10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#007bff",
                color: "white",
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={results.length}
        next={fetchMoreData}
        hasMore={results.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row">
          {results.length > 0 ? (
            results.map((element, index) => (
              <div
                className="col-md-3"
                key={`${element.pubDate}-${index}`}
                style={{ color: props.mode === "dark" ? "white" : "#232D3F" }}
              >
                <Newsitem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 75) : ""
                  }
                  imageurl={element.image_url}
                  newsurl={element.link}
                  author={
                    element.creator ? element.creator.join(", ") : "Unknown"
                  }
                  date={element.pubDate}
                  source={element.source_name}
                  source_icon={element.source_icon}
                  mode={props.mode}
                />
              </div>
            ))
          ) : (
            <div>No Results to display</div>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in,ch,us,de,sg",
  pageSize: 8,
  category: "world,top,business,sports,lifestyle",
  apikey: process.env.REACT_APP_NEWSHUB,
};

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
  apikey: propTypes.string,
  setProgress: propTypes.func.isRequired,
  mode: propTypes.string.isRequired,
};

export default News;
