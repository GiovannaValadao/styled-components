import {
  fundoClaro,
  conteudoClaro,
  textoFundoClaro,
  fundoEscuro,
  conteudoEscuro,
  textoFundooEscuro,
} from "./variaveis";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: "",
};

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundooEscuro,
  filter: "invert(100%)",
};
