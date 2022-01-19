import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jquery';
  name = 'Jquery Integration with Angular!';
  isJqueryWorking: any;
  ngOnInit() {
    $(document).ready(function () {
      // this.isJqueryWorking = 'Jquery is working !!!';
      $('h3').hover(function () {
        $('h3').css('color', 'slateblue');
      });

      $('button').click(function () {
        $('#working').animate({ left: '250px' });
      });
    });
  }
}
