import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SearchByDateForm } from 'src/typings/forms/SearchByDate.form';
import { Invoice } from 'src/typings/interfaces/invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private baseURL: string = `${environment.apis.invoices}/invoices`;

  constructor(
    private http: HttpClient
  ) { }

  find({ start, end }: SearchByDateForm) {
    const params = new HttpParams().set('start', start)
                                  .set('end', end)
    return this.http.get<Invoice[]>(this.baseURL, { params })
  }
}
