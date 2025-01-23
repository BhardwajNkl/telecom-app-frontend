import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WifiRequestService } from 'src/app/services/wifi-request.service';

@Component({
  selector: 'app-new-connection-request-page',
  templateUrl: './new-connection-request-page.component.html',
  styleUrls: ['./new-connection-request-page.component.css']
})
export class NewConnectionRequestPageComponent {

  requestForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly wifiRequestService: WifiRequestService
  ) {
    this.requestForm = fb.group(
      {
        mobile: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
        name: [null, [Validators.required]],
        address: [null, [Validators.required]],
      }
    )

  }

  onSubmit() {
    if (this.requestForm.valid) {
      this.addWifiRequest(this.requestForm.value);
    } else {
      alert('Invalid form!')
    }
  }

  getAllWifiRequests() {
    this.wifiRequestService.getAllWifiRequests().subscribe(
      requests => {
        console.log(requests);
      },
      error => {
        console.log(error);
      }
    )
  }

  getWifiRequestById(id: number) {
    this.wifiRequestService.getWifiRequestById(id).subscribe(request => {
      console.log(request);
    })
  }

  addWifiRequest(newRequestDto: any) {
    console.log(newRequestDto);
    this.wifiRequestService.addWifiRequest(newRequestDto).subscribe(
      request =>{
        console.log(request);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
