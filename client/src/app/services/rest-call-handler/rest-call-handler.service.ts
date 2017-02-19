import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

@Injectable()
export class RestCallHandlerService {

	constructor(public http: Http) {}

	apiCall(params):any{
		let url = environment.apiRoot + params.endPoint;

		if(!params.body){
			  return this.http.get(url, {headers : contentHeaders})
		} else {
			return this.http.post(url, params.body, {headers : contentHeaders});
		}
	}
}
