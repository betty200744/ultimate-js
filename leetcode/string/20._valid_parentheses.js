let match = (c1, c2) => {
  let ar = ['[]', '()', '{}'];
  return ar.some(s => (s[0] === c1 && s[1] === c2))
};

function matchStack(stack, s) {
  if (stack.length === 0) {
    return false
  }
  for (let i = 0; i < stack.length; i++) {
    if (!match(stack[i], s[s.length - i - 1])) {
      return false
    }
  }
  return true;
}

let judge = (str) => {
  str = str.replace(/ /gi, '');
  let i = 0
  let stack = []
  while (i < str.length) {
    if (matchStack(stack, str.substr(i, stack.length))) {
      i += stack.length
      stack = []
    } else {
      stack.push(str[i])
      i += 1
    }
  }
  return stack.length === 0;
};

const problems = {
  '[()][]': true,
  '[())[]': false,
  '()[]{}': true,
  '(]': false,
  '[()   ] []': true,
};

Object.keys(problems)
  .forEach(key => {
    if (judge(key) !== problems[key]) {
      throw new Error(`${key} error`);
    }
  });

console.log('passed');

