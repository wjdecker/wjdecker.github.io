---
subject: World
layout: base.njk
mermaid: true
---
# Hello {{ subject }}

WJD is trying to take Obsidian mardown to a web page!

```mermaid
  info
```



~~~mermaid
flowchart TD

subgraph 2022
	A("a")
	F("f")
end

subgraph 2023
	B("b")
end

subgraph 2024
	C("c")
	D("d")
end

subgraph 2025
	E("e")
end

A --> B --> D --> E
A --> C --> D
A --> D
F-.->|unconfirmed| D

class A,B,C,D,E,F internal-link;
~~~




