import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class loadvideoservice{
    constructor(private _http: HttpClient) 
    {
    }
    getTranscrire(url:string):Observable<string>{
        return this._http.post<string>("http://localhost:5000/Transcrire",url);
    }
}