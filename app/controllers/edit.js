import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
export default Controller.extend({
    userData: service(),
    username:'',
    actions:
    {
        edituser(){
            this.set('username',this.get('userData').count[0].name);
            this.set('userid', this.get('userData').count[0].userid);
            this.set('name', this.get('userData').count[0].name);
            this.set('email', this.get('userData').count[0].email);
            },
        save() {
            set(this.get("userData").count[0], "userid", (this.get('userid')));
            set(this.get("userData").count[0], "name", (this.get('name')));
            set(this.get("userData").count[0], "email", (this.get('email')));
            console.log(this.get("userData").count,this.get('name'));
        
        }
    }
});
