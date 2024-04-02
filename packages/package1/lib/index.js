// index.ts
function package1() {
  console.log("Hello via Bun! - PACKAGE1");
}
export {
  package1 as default
};
