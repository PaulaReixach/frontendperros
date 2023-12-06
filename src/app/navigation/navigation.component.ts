import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  @Input() dropdownOpen: boolean = false;

  //TABLAS
  infoValue: { [key: string]: Array<string>} = {
    animal: [],
    pelatge: [],
    color: [],
    raca: [],
    racagos: [],
    racagat: [],
    racaocell: [],
    racaconill: [],
    enfermetat: [],
    tamany: [],
    edat: []
  };

  formState: { [key: string]: string} = {
    Animal: '+',
    Pelatge: '+',
    Color: '+',
    Raca: '+',
    Enfermetat: '+',
    Tamany: '+',
    Edat: '+',
  }

  buttonsState: { [key: string]: boolean } = {
    Animal: false,
    Pelatge: false,
    Color: false,
    Raca: false,
    RacaGos: false,
    RacaGat: false,
    RacaOcell: false,
    RacaConill: false,
    Enfermetat: false,
    Tamany: false,
    Edat: false,
  };
  //TABLAS

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeMenu() {
    this.dropdownOpen = false;
  }

  toggleButtons(button: string) {
    this.buttonsState[button] = !this.buttonsState[button];
    const botonesAdicionales = document.getElementById(button);

    if (botonesAdicionales) {
      if (this.buttonsState[button]) {
        botonesAdicionales.style.display = "flex";
      } else {
        botonesAdicionales.style.display = "none";
      }
    }
    // Cambia la forma del botón y actualiza el nombre
    if(this.formState[button] === '+'){
      this.formState[button] = '-';
    } else {
      this.formState[button] = '+';
    }
    const botonElement = document.getElementById(button + "B");

    if (botonElement) {
      botonElement.innerHTML = button + " " + this.formState[button];
    }
  }


  selectInfo(type: string, value: string) {
    if(type === 'animal'){
      const nom = value + "A";
      const vari = "raca" + value.toLowerCase();

      this.buttonsState[vari] = !this.buttonsState[vari];
      const racasEspecifiques = document.getElementById(nom);
      if (racasEspecifiques) {
        if (this.buttonsState[vari]) {
          racasEspecifiques.style.display = "flex";
        } else {
          racasEspecifiques.style.display = "none";
          let i = 0;
          while(i < this.infoValue[vari].length){
            this.selectInfoRaca('raca', this.infoValue[vari][i] ,value.toLowerCase());
          }
        }
      }
    }
    const botonSeleccionado = document.getElementById(value.toLowerCase());

    if (botonSeleccionado) {
      // Alternar la clase 'selected' en el botón
      botonSeleccionado.classList.toggle('selected');

      const valSel = botonSeleccionado.querySelector('span');
      if (valSel) {
        if (botonSeleccionado.classList.contains('selected')) {
          valSel.innerHTML = '&#10008;'; // Poner la cruz
          this.infoValue[type].push(value);
        } else {
          valSel.innerHTML = ''; // Vaciar el contenido
          // Quitar la mascota de la array
          const index = this.infoValue[type].indexOf(value);
          if (index !== -1) {
            this.infoValue[type].splice(index, 1);
          }
        }
      }
    }
  }

  selectInfoRaca(type:string, value:string, raca:string){
    const botonSeleccionado = document.getElementById(value.toLowerCase());

    if (botonSeleccionado) {
      // Alternar la clase 'selected' en el botón
      botonSeleccionado.classList.toggle('selected');

      const valSel = botonSeleccionado.querySelector('span');
      if (valSel) {
        const vari = type + raca;
        if (botonSeleccionado.classList.contains('selected')) {
          valSel.innerHTML = '&#10008;'; // Poner la cruz
          this.infoValue[type].push(value);

          /** TAULA COMPLEMENTARIA */
          this.infoValue[vari].push(value);
          /** TAULA COMPLEMENTARIA */

        } else {
          valSel.innerHTML = '';

          const index = this.infoValue[type].indexOf(value);
          const indexRaca = this.infoValue[vari].indexOf(value);
          if (index !== -1 && indexRaca !== -1) {
            this.infoValue[type].splice(index, 1);
            this.infoValue[vari].splice(indexRaca, 1);
          }
        }
      }
    }
  }
}
