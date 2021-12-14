import React from "react";
import { data } from "../../service/data";
import Card from "../../components/card/card.component";

class Characters extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
    };
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <>
        <h3 className="text-center mb-5 p-2">Personajes Rick and Morty </h3>
        <div className="d-flex justify-content-center flex-wrap">
          {data.map(({ id, ...ohterDataProps }) => (
            <Card key={id} {...ohterDataProps} />
          ))}
        </div>
      </>
    );
  }
}

export default Characters;
