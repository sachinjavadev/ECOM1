import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn =  new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(data:any){
     let result = this.http.post('http://localhost:3000/seller',data,{observe:'response'})
     .subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
      localStorage.setItem('seller', JSON.stringify(result.body))
      
     });
     
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
