import { Component, OnInit } from '@angular/core';

/**
 * Global StripeCheckout variable taken from index.html script
 * <script src="https://checkout.stripe.com/checkout.js"></script>
 */
declare const StripeCheckout: any;

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {

  handler: any;

  constructor() { }

  /**
   * As suggested by the below code
   * https://stripe.com/docs/checkout#integration-custom
   *
   * the image value is disabled to allow original backgroung
   * to be displayed
   */
  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
      // image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });
  }

  click(event: any) {
    // Open Checkout with further options:
    this.handler.open({
                   name: 'Stripe.com',
                   description: '2 widgets',
                   zipCode: true,
                   amount: 2000
                 });
    event.preventDefault();
  }

}
