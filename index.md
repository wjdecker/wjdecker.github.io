---
subject: World
---
# Hello {{ subject }}

WJD is trying to be an eleventy developer!

- [Markdown](/docs/languages/markdown/)
- [Liquid](/docs/languages/liquid/)

## Posts

{%- for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url}})
{%- endfor %}

_Built with {{ eleventy.generator }}_
