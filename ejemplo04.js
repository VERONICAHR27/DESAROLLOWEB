
//creacion de metodos
//let auto1={
  //  fabricante: "Toyota",
   // modelo: "RAVA",
    //color: "Rojo",
    //cilindrada: 2.0,
    //detalle: function () {
      //  console.log("Fabricante: "+this.fabricante + " Modelo: "+this.modelo);
   // }
//}
//auto1.detalle();//

//funcion flecha
let auto1={
    fabricante: "Toyota",
    modelo: "RAVA",
    color: "Rojo",
    cilindrada: 2.0,
    detalle () {
        console.log("Fabricante: "+this.fabricante+ " Modelo: "+this.modelo);
    },
    detalle2 (){
        console.log("Color: "+this.color+ " Cilindrada: "+this.cilindrada);

    }
}
auto1.detalle();
auto1.detalle2();