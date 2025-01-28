
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.madule';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
