import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  title = new FormControl('', [Validators.required, Validators.minLength(5)]);

  description = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);

  constructor() {}

  ngOnInit(): void {}
}
