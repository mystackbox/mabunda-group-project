import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'features-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent implements OnInit {
  title = "contact us";

  //local variables declaration
  _contactForm!: FormGroup;
  _errorMessage: string = '';



  @ViewChild('googleMap', { static: true })
  googleMapRef!: ElementRef;

  // Will contain the reference of rendered map instance 
  map: google.maps.Map | undefined;

    constructor(
      private _router: Router) {  

        const mapOptions: google.maps.MapOptions = {
          // Centered to Hyderabad, India
          center: new google.maps.LatLng(17.412127, 78.474921),
          zoom: 14,
        };
    }
  
    ngOnInit(): void{ 
      
       //Initialize the form
      this._contactForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        emailAddress: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required]),
      });

      this.initMap();
      
    }

    private initMap(): void {

      const mapOptions: google.maps.MapOptions = {
        // Centered to Hyderabad, India
        center: new google.maps.LatLng(-25.74924, 28.09478),
        zoom: 13,
      };
  
      this.map = new google.maps.Map(this.googleMapRef.nativeElement, mapOptions);
    }
  
  
    //getter for form-control[name]
    get name() {
      return this._contactForm.get('name');}
  
    //getter for form-control[emailAddress]
    get emailAddress() {
      return this._contactForm.get('emailAddress');}
    
    //getter for form-control [message]
    get message() {
      return this._contactForm.get('message');}

    sendMesssage(){

    }
}
