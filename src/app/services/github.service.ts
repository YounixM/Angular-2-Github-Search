import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username : string;
    private client_id = 'f0ac41f6bb25990d6ba2';
    private client_secret = 'bc5ac329c3ed737d519e461d166b39c022938f80';    

    constructor(private http:Http){
        console.log("github service ready");
        this.username = "YounixM";
    }

    getUser(){
        return this.http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret' + this.client_secret)
                            .map(res => res.json());
    }

    getRepos(){
        return this.http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret' + this.client_secret)
                            .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}
