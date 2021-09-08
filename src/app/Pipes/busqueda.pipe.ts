import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    const resultPost=[];
    for(const producto of value ){
      if (producto.name.indexOf(args)> -1){
          resultPost.push(producto);
      };
    };
    return resultPost;
  }

}
