/**
 * Created by betty on 8/5/20.
 */
"use strict";
let persions1 = new Map()
// map operator
persions1.set("a", "a")
persions1.set("b", "b")
persions1.set("c", "c")
persions1.size
persions1.has("a")
persions1.get("b")
persions1.delete("a")

persions1.keys()
persions1.values()
persions1.entries()
// map iterating
persions1.forEach((k, v) => {
  console.log(k, v)
})
for (const [key, value] of persions1) {
  console.log(key, value)
}
