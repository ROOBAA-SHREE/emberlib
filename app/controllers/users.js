import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
  userData: service(),
  actions: {
    edituser(item) {
      //set(this.get("userData").count,"count",(this.get('name')));
      this.userData.add(item);


    }
  }
});
