import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
 
import {Hero} from './hero';

@Injectable()
export /**
 * HeroServcies
 */
    class HeroServcies {
    options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
   
    constructor(private http: Http) { }
    //数据处理
    query(): Observable<Hero[]> {
        return this.http.get('/api/heros')
            .map(this.extractData)
            .catch(this.handleError);
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
            console.error(error.status);
        return Observable.throw(errMsg);
    }
}

