import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgUploaderModule } from 'ngx-uploader';  <------Changed this !!

@Component({

  selector: 'app-import-acct',
  templateUrl: './import-acct.component.html',
  styleUrls: ['./import-acct.component.css']
})
export class ImportAcctComponent implements OnInit {
  filesToUpload: Array<File>;

  constructor() { this.filesToUpload = []; }

  upload() {
    this.makeFileRequest("http://localhost:3000/upload", [], this.filesToUpload).then((result) => {
      console.log(result);
    }, (error) => {
      console.error(error);
    });
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }

  ngOnInit() {
  }


}
//bootstrap(ImportAcctComponent, []);
