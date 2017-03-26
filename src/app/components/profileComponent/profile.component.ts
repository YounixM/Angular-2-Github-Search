import { Component } from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
    moduleId : module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
  
})

export class ProfileComponent  { 
    user : any[];
    repos : any[];
    username : string;

    constructor(private githubService : GithubService){
        this.getUserData();
    }

    searchUser(){

        this.githubService.updateUser(this.username);
        this.getUserData();
    }

    getUserData(){
        this.githubService.getUser().subscribe( user => {
            this.user =  user;
        })

        this.githubService.getRepos().subscribe( repos => {
            this.repos =  repos;
        })
    }

 }
