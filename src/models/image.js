import Backbone from "backbone";

export default Backbone.Model.extend({
  defaults: {
    caption: null,
    extenstion: null,
  },

  constructor() {
    this.url = '/api/Images';
  },

  fetch(id) {
    axios.get(this.url + "id").then(res => {
      console.log(res);
    })
  }
});