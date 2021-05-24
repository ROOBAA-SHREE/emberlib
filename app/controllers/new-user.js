import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
  userData: service(),
  actions: {
    save: function () {
      console.log("hi");
      this.userData.addItem({
        "userid": this.get('userid'),
        "name": this.get('name'),
        "email": this.get('email'),
      });
      //console.log(this.userData.items[0][0].name);
    },
  },
});
