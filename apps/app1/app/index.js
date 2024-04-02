// /Users/mattia/Dev/turborepo-test/node_modules/@repo/package1/lib/index.js
var package1 = function() {
  console.log("Hello via Bun! - PACKAGE1");
};

// /Users/mattia/Dev/turborepo-test/node_modules/@repo/package2/lib/index.js
var package2 = function() {
  console.log("Hello via Bun! - PACKAGE3");
};

// /Users/mattia/Dev/turborepo-test/node_modules/@repo/package3/lib/index.js
var package3 = function() {
  console.log("Hello via Bun! - PACKAGE3");
};

// index.ts
console.log("Hello via Bun! - APP1");
package1();
package2();
package3();
