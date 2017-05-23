import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs';
// import 'rxjs/add/observable/combineLatest';
import { Hero } from '../../../../models/Hero';
import { House } from '../../../../models/House';
/**
 * 
 * 
 * @export
 * @class HeroServcies
 */
@Injectable()

export /**
 * HeroServcies
 */
    class HeroServcies {
    options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    constructor(private http: Http) { }
    //数据处理
    getHeros(): Observable<Hero[]> {
        return this.http.get('/api/heros')
            .map(this.extractData)
            .catch(this.handleError);
    }
    getOneHero(id:number): Observable<Hero> {
        return this.http.get('/api/heros/'+id)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getHouse():Observable<House[]> {
        return this.http.get('/api/house')
            .map(this.extractData)
            .catch(this.handleError);
    } 
    
    getAll(): any {
        return Observable.combineLatest(
            this.getHeros(), this.getHouse())
            .map(res => { 
                return res;
            }).catch(this.handleError);
    }

    //---------------
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleError(error: any) {
        debugger;

        let errMsg = (error.message) ? error.message :
            error.status ? `错误信息:  ${error.status} - ${error.statusText}` : 'Heros服务错误信息';
        console.error(error);
        return Observable.throw(errMsg);
    }
}

