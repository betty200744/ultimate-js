/**
 * Created by betty on 8/6/20.
 */
"use strict";

class MartReview {
  constructor(title, icon, content) {
    this.title = title
    this.icon = icon
    this.content = content

  }

  import() {
    return {title: this.title, icon: this.icon, content: this.content}
  }
}

let mr1 = new MartReview("t", "i", "c")
console.log(mr1.import())