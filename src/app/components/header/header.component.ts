import { Component, OnInit } from '@angular/core';
 
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
   
})
export class HeaderComponent implements OnInit {

  like :boolean;
  likes: boolean;
  post: string; 
  comments: string[];
  showcomments: boolean;
  likesArray: boolean[];
  max : number;     
 

  constructor() { 

    this.like = false;
    this.likes = false;
    this.comments = [];
    this.showcomments = false;
    this.likesArray = [];
    this.max = 20;

    for( var i=0; i<this.max; i++)
    {
      this.likesArray.push(false);
    }
  
  }  
  

  ngOnInit() {
    this.post = " "; 
  }

  

  addComment(comment)
  {   
      
      this.comments.push(comment);
       
  }


  deleteComment(i)
  {
    this.comments.splice(i,1);
  }

  toggleComments()
  {
      if(this.showcomments == true) 
      {
        this.showcomments =  false;
      }
      else
      {
         this.showcomments = true;
      }
  }


  toggleLike() {
    if(this.like == true)
    {
      
      this.like = false;
    }
    else if(this.like == false)
    {
       
      this.like = true;
    }
  }

  
  toggleLikes(i) {
    if(this.likesArray[i] == true)
    {
       
      this.likesArray[i] = false;
    }
    else if(this.likesArray[i] == false)
    {
      
      this.likesArray[i] = true;
    }
  }

  
 
  
}
 