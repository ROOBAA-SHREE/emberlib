import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('users');
  this.route('new-user');
  this.route('edit');
  this.route('details');
  this.route('books');
});

export default Router;
