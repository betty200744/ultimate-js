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

class Review extends MartReview {
  constructor(title, icon, content, owner) {
    super(title, icon, content);
    this.owner = owner
  }

  publish() {
    return {title: this.title, icon: this.icon, content: this.content, owner: this.owner}
  }
}

let r1 = new Review("t", "i", "c", "o")
console.log(r1.publish())
console.log(r1.import())