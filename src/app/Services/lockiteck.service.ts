import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LockiteckService {

  lockiteckServices:any[] = [

    {
      nombre: "Programadores",
      descripcion: "Nuestros programadores son de las personas más cualificadas de todo el mercado, y apreciamos a nuestros clientes.",
      foto : "/assets/img/code-5113374_1280.jpg"
    },
    {
      nombre:"Seguridad",
      descripcion:"Siempre proporcionamos que tanto con nuestros productos y servicios proporcionaremos tanto la seguridad informatica como la física." ,
      foto : "/assets/img/security-265130_1280.jpg"
    },
    {
      nombre:"Productos",
      descripcion:"Nuestros productos estan hechos por un gran equipo y de materiales que la gran mayoria son acondicianados.",
      foto: "/assets/img/desktop-1245714_1280.jpg"
    },
    {
      nombre:"Equipo",
      descripcion:"Nuestro equipo esta formado de personas cualificadas y trabajan en un ambiente muy comodo y hecho por ellos.",
      foto:"/assets/img/women-1209678_1280.jpg"


    },
  ];
  productosServices :any[] = [
    {
      id:"0",
      name:"Ratón XRV542",
      description:"Increíble precisión. Diseño ergonómico para ofrecer a los jugadores diestros la experiencia más cómoda.\n Ajuste rápido de DPI . Equipado con el sensor óptico PAW-3519 proporciona cuatro niveles de configuración de DPI instantánea sin control de software para varios usos",
      date:"27 de noviembre 2016",
      foto:"/assets/img/productos/office-5079224_1280.jpg"
    },
    {
      id:"1",
      name:"Ratón JLK458",
      description:"Es compatible con ordenadores que utilizan Window, Chrome OS™ y Mac®. Es tan pequeño y discreto que si lo conecta a un puerto USB, se olvidará completamente de él. Además, se acabaron las preocupaciones por la pérdida de receptores.\n Disfrutará de la fiabilidad de un cable con la comodidad y la libertad de la tecnología inalámbrica: transmisión de datos rápida y virtual sin retrasos ni interrupciones.",
      date:"13 de junio 2020",
      foto:"/assets/img/productos/mouse-5417888_1280.jpg"
    },
    {
      id:"2",
      name:"Ratón VR45",
      description:"Personalización para adaptarse a tu estilo de juego. Para disfrutar de todo tu potencial, tienes que optimizar al máximo las herramientas de las que dispones.\n El ratón para juegos con opciones personalizables que te permiten lograr un mayor control para tener ventaja en la batalla ",
      date:"16 de septiembre 2019",
      foto:"/assets/img/productos/laptop-1399125_1280.jpg"
    },
  ];
    productos2Services :any[] = [
    {
      id:"3",
      name:"Teclado hp45",
      description:" Es parte de una gama de teclados muy compactos y ligeros que a la vez nos proporcionan seguridad en cada click. La gran novedad que supone se debe a que es un teclado compacto que deja de lado todo el pad numérico para ofrecerte toda su potencia y características en un formato ideal ",
      date:"25 de diciembre 2016",
      foto:"/assets/img/productos/keyboard-656722_1280.png"
    },
    {
      id:"4",
      name:"MFS15 keyboard ultimate",
      description:"Cuenta con teclas especiales para juegos con grabación simultánea de macros y con un diseño duradero y resistente a las salpicaduras para una seguridad absoluta",
      date:"30 de novimebe 2015",
      foto:"/assets/img/productos/keyboard-142418_1280.jpg"
    },
    {
      id:"5",
      name:"Apple keyboard serie3",
      description:"Teclado Bluetooth v3.0 ofrece una sincronización y transferencia de datos más rápida y un menor gasto de batería. Alcance máximo 10m. Teclado de 78 teclas retroiluminado.",
      date:"12 de mayo 2018",
      foto:"/assets/img/productos/imac-464739_1280.jpg"
    },
  ];
  productos3Services :any[] = [
    {
      id:"6",
      name:"Headphones Nautilus N5",
      description:"Con cable extraíble y con una combinación de colores elegidos para ti. Destaca su comodidad gracias al diseño circumaural y sus almohadillas, además, controla la reproducción de la música y responde a tus llamadas con el micrófono integrado.",
      date:"16 de noviembre 2014",
      foto:"/assets/img/productos/headphones-690685_1280.jpg"
    },
    {
      id:"7",
      name:"NG54 headphones",
      description:" Con diseño urbano y ergonómico pueden hacer por ti: diadema extensible y almohadillas con rotación de 10º. Con micrófono, botón para controlar la reproducción y sistema de plegado para guardarlos en cualquier lugar.",
      date:"19 de noviembre 2019",
      foto:"/assets/img/productos/headphone-3085681_1280.jpg"
    },
    {
      id:"8",
      name:"Beats ultra 56",
      description:"Cambia sin problema entre la Cancelación de ruido con calibración de audio en tiempo real y el Modo de sonido ambiente para que estés alerta de lo que te rodea. El diseño ergonómico de los auriculares te permite que los disfrutes cómodamente todo el tiempo que quieras, sin renunciar al diseño",
      date:"17 de febrero 2016",
      foto:"/assets/img/productos/headphones-1230987_1280.jpg"
    }
  ];

 

constructor() {}
 getLocki(){
    return this.lockiteckServices;
}
  getProductos1(){
    return this.productosServices;
  }
  getProductos2(){
    return this.productos2Services;
  }
  getProductos3(){
    return this.productos3Services;
  }
}
