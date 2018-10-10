import { Component } from '@angular/core';
import {Post} from './type/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Array<Post> = [
    {
      title: 'premier post',
      content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada eleifend consectetur. Aenean et nibh felis. Sed ' +
                'aliquet purus ac neque porta, a rutrum felis pellentesque. Proin euismod justo ut elit malesuada scelerisque. Nulla ' +
                'condimentum, justo et tempus molestie, neque sapien cursus dolor, non rhoncus nisi mi sit amet risus. Proin facilisis ' +
                'urna sit amet fermentum sodales. Suspendisse potenti. Nulla vestibulum nunc magna, non semper odio imperdiet ut.' +
                ' Vivamus cursus sapien vel molestie iaculis. Sed vel vehicula magna, condimentum lobortis erat. Curabitur ac libero ' +
                'commodo massa mollis tincidunt at vel diam.',
      loveIts: 0,
      created_at : new Date('2018-10-08')
    },
    {
      title: 'SECOND post',
      content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada eleifend consectetur. Aenean et nibh felis. Sed ' +
      'aliquet purus ac neque porta, a rutrum felis pellentesque. Proin euismod justo ut elit malesuada scelerisque. Nulla ' +
      'condimentum, justo et tempus molestie, neque sapien cursus dolor, non rhoncus nisi mi sit amet risus. Proin facilisis ' +
      'urna sit amet fermentum sodales. Suspendisse potenti. Nulla vestibulum nunc magna, non semper odio imperdiet ut.' +
      ' Vivamus cursus sapien vel molestie iaculis. Sed vel vehicula magna, condimentum lobortis erat. Curabitur ac libero ' +
      'commodo massa mollis tincidunt at vel diam.',
      loveIts: 0,
      created_at : new Date('2018-10-09')
    },
    {
      title: 'DERNIER POST',
      content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada eleifend consectetur. Aenean et nibh felis. Sed ' +
      'aliquet purus ac neque porta, a rutrum felis pellentesque. Proin euismod justo ut elit malesuada scelerisque. Nulla ' +
      'condimentum, justo et tempus molestie, neque sapien cursus dolor, non rhoncus nisi mi sit amet risus. Proin facilisis ' +
      'urna sit amet fermentum sodales. Suspendisse potenti. Nulla vestibulum nunc magna, non semper odio imperdiet ut.' +
      ' Vivamus cursus sapien vel molestie iaculis. Sed vel vehicula magna, condimentum lobortis erat. Curabitur ac libero ' +
      'commodo massa mollis tincidunt at vel diam.',
      loveIts: 0,
      created_at : new Date()
    },
  ];
}
