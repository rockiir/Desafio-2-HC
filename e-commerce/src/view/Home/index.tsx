import React from "react";

import { Container} from './style';


const Home: React.FC = () => {
  return(
    <Container>
      <section>
        <div>
          <img src="https://img.elo7.com.br/product/zoom/30C5CF1/painel-redondo-festa-tecido-bola-de-futebol-c-elastico-1-5m-painel-redondo-festa-tecido.jpg" alt="bola" width= "200" height ="auto" />
          <span>descriçao</span>
          <h6> price</h6>
        </div>
      </section>
    </Container>
  );
}

export default Home;
