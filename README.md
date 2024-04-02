# turborepo-test

Install dependencies

```bash
bun install
```

Then try to run
```bash
bunx turbo build:package
```

Then try to run
```bash
bunx turbo deploy
```

You will notice that the packages are correctly built in the order according to their dependencies

```mermaid
graph TD
  QHZT("@repo/package1#build:package") --> ETTT("@repo/package2#build:package")
  ETTT("@repo/package2#build:package") --> JEGP("___ROOT___")
  EMLE("@repo/package3#build:package") --> QHZT("@repo/package1#build:package")
  LRHC("@repo/package4#build:package") --> JEGP("___ROOT___")
  GLAO("app1#build:package") --> QHZT("@repo/package1#build:package")
  GLAO("app1#build:package") --> ETTT("@repo/package2#build:package")
  GLAO("app1#build:package") --> EMLE("@repo/package3#build:package")
```