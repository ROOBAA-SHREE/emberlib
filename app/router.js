import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('users', function() {
    this.route('new-user');
    this.route('edit',{ path: '/:userid/edit'});
    this.route('details',{ path: '/details/:userid'});
    this.route('list');
  });
  this.route('books');
});

export default Router;
