/**
 * Created by betty on 8/4/20.
 */
"use strict";

const seasons = {
  SUMMER: 'summer',
  WINTER: 'winter',
  SPRING: 'spring',
  AUTUMN: 'autumn'
}
let season = seasons.SUMMER
switch (season) {
  case seasons.SUMMER:
    console.log("summer")
    break
  case seasons.WINTER:
    console.log("winter")
    break
  case seasons.SPRING:
    console.log("spring")
    break
  default:
    console.log("autumn")
}