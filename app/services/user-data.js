import Service from '@ember/service';
import { A } from '@ember/array';
export default Service.extend({
  items: null,
  count: '',
  init() {
    this._super(...arguments);
    this.set('items', A([]));
  },
  addItem(item) {
    this.items.pushObject({ 'description': [item] });
  },
  add(item) {
    this.count = item;
    console.log(this.count);
  }
});