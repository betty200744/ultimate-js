/**
 * Created by betty on 8/4/20.
 */
"use strict";

let season = "summer"

// break statement, terminates loop, 所有control flow, iterations，即while, do-while, for, switch
// continue statement, to next loop
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log("this is 3, and continue")
    continue
  }
  if (i === 4) {
    console.log("this is 4, and break")
    break
  }
  console.log(i)
}
switch (season) {
  case "summer":
    console.log("this is summer")
    break;
}


