import React, { Component } from "react";
import Buttons from "./Buttons";
import Result from "./Result";
import ErrorComp from "./ErrorComp";
import Spinner from "./Spinner";

class Hotels extends Component {
  state = {
    data: [],
    showList: false,
    isLoading: false,
    error: null,
  };

  getData = () => {
    this.setState({
      isLoading: true,
    });

    fetch("https://fake-hotel-api.herokuapp.com/api/hotels?count=5")
      .then((blob) => blob.json())
      .then((hotels) => {
        this.setState(
          {
            data: hotels,
            isLoading: false,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  showList = () => {
    this.setState({
      showList: true,
    });
    this.getData();
  };

  render() {
    const { data, showList, isLoading } = this.state;
    return (
      <div className="main">
        <div className="container">
          <div className="main__wrapper">
            <Buttons action={this.showList}>Load Hotels</Buttons>
            {isLoading ? <Spinner /> : null}
            {data.error ? <ErrorComp error={data.error} /> : null}
            <ul className="results">
              {showList && data.length > 0
                ? data.map((item, index) => {
                    return <Result key={index} {...item} showList={showList} />;
                  })
                : null}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Hotels;
