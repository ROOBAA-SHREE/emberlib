import Service from '@ember/service';
import { A } from '@ember/array';
export default Service.extend({
  items: null,
  count: '',
  init() {
    this._super(...arguments);
    this.set('items', A([]));
    this.items = [{
      description: [{

        email: 'john.ac.in',
        name: 'john',
        userid: '1'
      }],
    }, {
      description: [{

        email: 'jack.ac.in',
        name: 'jack',
        userid: '2'
      }]
    }]
  },
  addItem(item) {
    this.items.pushObject({ 'description': [item] });
    console.log(this.items);
  },
  add(item) {
    this.count = item;
    console.log(this.count);
  }
});