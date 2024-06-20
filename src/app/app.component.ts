import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuillEditorComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'empty-angular';
  content = 'editor'
}
