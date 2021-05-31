import Route from '@ember/routing/route';

export default Route.extend({
        model(/* transition */) {
            this.transitionTo('users.list'); // Implicitly aborts the on-going transition.
          }
    
});
