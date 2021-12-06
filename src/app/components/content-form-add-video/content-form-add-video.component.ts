import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-content-form-add-video',
  templateUrl: './content-form-add-video.component.html',
  styleUrls: ['./content-form-add-video.component.css']
})
export class ContentFormAddVideoComponent {

  file: File | undefined;
  fileName: string | undefined;

  constructor(
    private Api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }
  
  onFormSubmit() {
    if (this.file && this.data.data.moduleId) {
      this.Api.postVideo(this.file).subscribe(videoMeta => {
        const form = new FormData()
        
        const data = {
          name: videoMeta.originalname,
          contentOrder: 50,
          toDocument: videoMeta._id,
          onModel: 'Video',
          moduleId: this.data.data.moduleId,
          isPublished: 'true',
          dropDate: Date.now(),
        }
        for (let [key, value] of Object.entries(data)) {
          form.append(key, value)
        }
        this.Api.postContent(form)
        window.location.reload()
      })
    }
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
    }
}

}
