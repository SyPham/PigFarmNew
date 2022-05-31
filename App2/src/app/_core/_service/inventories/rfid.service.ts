import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rfid } from '../../_model/inventories';
import { CURDService } from '../base/CURD.service';
import { UtilitiesService } from '../utilities.service';
@Injectable({
  providedIn: 'root'
})
export class RfidService extends CURDService<Rfid> {

  constructor(http: HttpClient,utilitiesService: UtilitiesService)
  {
    super(http,"Rfid", utilitiesService);
  }
  getRfids(farmGuid): Observable<any> {
    return this.http.get<any>(`${this.base}Rfid/GetRfids?farmGuid=${farmGuid}`, {});
  }
}
