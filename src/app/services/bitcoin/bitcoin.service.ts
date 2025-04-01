import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private readonly http: HttpClient) {}

  public getRate(): Observable<number> {
    return this.http.get<number>(
      'https://blockchain.info/tobtc?currency=USD&value=1'
    );
  }

  // TODO: Check API
  public getMarketPrice(): Observable<any> {
    return this.http.get<any>(
      'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true'
    );
  }

  // TODO: Check API
  public getConfirmedTransactions(): Observable<any> {
    return this.http.get<any>(
      'https://api.blockchain.info/rawaddr/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?cors=true'
    );
  }
}
