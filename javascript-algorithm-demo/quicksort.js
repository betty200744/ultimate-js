/**
 * Created by betty on 5/12/20.
 */
"use strict";


function qsort(a, l, r) {
  if (l >= r) return;
  let m = a[l];
  console.log(m);

  var i = l;
  var j = r;
  while (i < j) {
    //找到比M大的全部连续数组块, 然后这时候j右边是数组块都比m要大，然后a[j]比m要小
    while (i < j && m <= a[j]) j--;
    //因为a[j]比m要小，所以放在左边已经排好数组的最右边
    a[i] = a[j];

    //找到找到比M要小的全部连续数组快，然后这时候i比m要大
    while (i < j && a[i] <= m) i++;
    //因为a[i]比m要大，所以放在右边已经排好的数组的最左边
    a[j] = a[i];

    //循环结束，这时候，所有a[l..<i] <= m, a[j>..r] => m
    //开始第二次循环，直到i和j相等
  }

  //因为a[l]是第一个被覆盖的，这时候刚好把a[l]的值给a[i]. 因为这时候a[l..<i] <= m, a[i>...r] >= m
  //所以没有数据丢失
  a[i] = m;
  qsort(a, l, i - 1);
  qsort(a, i + 1, r);
}

let ar = [1, 2, 7, 5, 3, 7];

qsort(ar, 0, ar.length - 1);
console.log('ar: ' + JSON.stringify(ar, null, 4) + '\n');