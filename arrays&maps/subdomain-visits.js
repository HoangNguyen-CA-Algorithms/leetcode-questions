/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let map = new Map();

  for (let s of cpdomains) {
    let [count, domain] = s.split(' ');
    let subdomains = domain.split('.');
    let currDomain;
    let domainStr = '';
    count = parseInt(count);

    for (let i = subdomains.length - 1; i >= 0; i--) {
      currDomain = subdomains[i];
      if (i !== subdomains.length - 1) domainStr = '.' + domainStr;

      domainStr = currDomain + domainStr;
      map.set(domainStr, count + (map.get(domainStr) || 0));
    }
  }
  let res = [];

  for (let [key, val] of map) {
    res.push(`${val} ${key}`);
  }
  return res;
};

console.log(
  subdomainVisits([
    '900 google.mail.com',
    '50 yahoo.com',
    '1 intel.mail.com',
    '5 wiki.org',
  ])
);
