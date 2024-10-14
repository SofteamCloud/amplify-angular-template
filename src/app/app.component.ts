import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import outputs from '../../amplify_outputs.json';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ToastModule } from 'primeng/toast';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, SidebarComponent, ToastModule, AmplifyAuthenticatorModule],
})
export class AppComponent {
  title = 'amplify-angular-template';

  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
}

