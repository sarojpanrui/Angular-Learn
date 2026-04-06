import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(usd:number, usdInRupee:number): unknown {
    return usd * usdInRupee;
  }
}
