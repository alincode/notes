function findContentChildren(g, s) {
  let gi = 0
  let si = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  while (gi < g.length && si < s.length) {
    if (g[gi] <= s[si]) {
      gi++;
    }
    si++;
  }
  return gi;
};

console.log(findContentChildren([1, 2], [1, 2, 3]));
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));