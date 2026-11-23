import wesnoth from "../assets/wesnoth.png";
import luanti from "../assets/luanti.png";
import minecraft from "../assets/minecraft.jpg";
import supertux from "../assets/supertux.png";
import supertuxkart from "../assets/supertuxkart.png";
import estrategia from "../assets/estrategia.jpg";

export const juegos = [
  {
    id: "minecraft",
    nombre: "Minecraft",
    genero: "Aventura",
    descripcion: "Explora un mundo de bloques, reúne materiales y construye tus propios refugios.",
    imagen: minecraft,
    textoAlternativo: "Escenario de Minecraft con construcciones y vegetación",
  },
  {
    id: "supertux",
    nombre: "SuperTux",
    genero: "Acción",
    descripcion: "Acompaña a Tux por escenarios de plataformas, recoge monedas y supera obstáculos.",
    imagen: supertux,
    textoAlternativo: "Tux recorre un nivel nevado de plataformas",
  },
  {
    id: "supertuxkart",
    nombre: "SuperTuxKart",
    genero: "Carreras",
    descripcion: "Compite en carreras de karts y recorre circuitos con distintos personajes.",
    imagen: supertuxkart,
    textoAlternativo: "Carrera de SuperTuxKart bajo la lluvia",
  },
  {
    id: "0-ad",
    nombre: "0 A.D.",
    genero: "Estrategia",
    descripcion: "Administra recursos, construye una ciudad y dirige a una civilización de la Antigüedad.",
    imagen: estrategia,
    textoAlternativo: "Ciudad antigua en un escenario de 0 A.D.",
  },
  { id: "wesnoth", nombre: "The Battle for Wesnoth", genero: "Estrategia", descripcion: "Recluta unidades y disputa batallas por turnos sobre mapas hexagonales.", imagen: wesnoth, textoAlternativo: "Emblema de The Battle for Wesnoth" },
  { id: "minetest", nombre: "Luanti", genero: "Aventura", descripcion: "Explora y construye mundos de vóxeles con los juegos de esta plataforma.", imagen: luanti, textoAlternativo: "Emblema de Luanti" },
];
