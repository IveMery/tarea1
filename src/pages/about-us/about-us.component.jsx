import React from "react";
import { firstCharacters } from ".././../utils/constants";
import { data } from "../../service/data";

const AboutUs = () => {
  return (
    <div className="vh-100 p-5">
      <h2 className="pb-4">Sobre Rick and Morty</h2>
      <h4 className="text-center">Personajes Principales</h4>
      <div className="d-flex justify-content-center flex-wrap">
        {firstCharacters(data).map(({ name, image }, index) => {
          return (
            <div
              key={index}
              className="card p-2 m-3"
              style={{ width: "14rem" }}
            >
              <img src={image} alt={name} />
              <div className="card-body">
                <h5 className="mt-2 text-center btn-primary">{name}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <h4>Narrativa</h4>
      <p>
        Rick y Morty no es una serie para niños. Las alocadas aventuras de
        abuelo y nieto van adquiriendo cada vez más complejidad a medida que
        transcurren los episodios; de igual forma, los personajes van
        evolucionado (a veces de formas inesperadas) y adquiriendo nuevas
        facetas que nos demuestra que todo está pensado, que todo tiene un
        sentido dentro de ese brillante y lisérgico caos que parece el argumento
        de la serie. Y es que todos los personajes cambian, para parecerse cada
        vez más a lo que en el fondo son. ¿Complicado? ¿No os hemos dicho ya que
        esta serie no es para niños? ¡A mí no me miréis! Además de los
        personajes principales, la serie cuenta con un plantel de personajes
        secundarios, a cada cual más elaborado e interesante. Y todos tienen su
        importancia en la trama y aportan algo a la existencialista odisea
        científico-multiversal de Rick y Morty. Hay una cantidad desorbitada de
        personajes más o menos importantes, secundarios o que simplemente
        aparecen de manera fugaz, que demuestran la riqueza del imaginario de la
        serie y su ilimitada capacidad para seguir ofreciéndonos con cada
        capítulo las más alocadas creaciones. ¡Anímate a repasar con nosotros
        algunos de lo más alocados, surrealistas, irreverentes, absurdos y
        maravillosos personajes de la mejor serie de animación de todo el
        multiverso!.
      </p>
    </div>
  );
};

export default AboutUs;
