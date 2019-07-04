import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {

    let strAux = '';

    if(activar){
          for(let i =0 ; i< value.length ;i++){
            strAux = strAux + '*';
          }
    }else{
      strAux = value
    }
    return strAux;
  }

}
