# The Western Harlot

Static site for [snugglepilot.github.io/westernharlot](https://snugglepilot.github.io/westernharlot/) — a 2024 Subaru Crosstrek Wilderness built for Cascadia's forest service roads.

Built with Jekyll, which GitHub Pages runs automatically on every push to `main`. All content lives in plain markdown/YAML files — edit, commit, push, and the site regenerates. No web editor needed.

## Where everything lives

| What | Where |
|---|---|
| Upgrade catalogue | `_upgrades/` — one markdown file per upgrade |
| Field log posts | `_log/` — one markdown file per post |
| Intro ("The Build") text | `content/build.md` |
| Hero headline, tagline & stats bar | `_data/hero.yml` |
| Build-section figure & price card | `_data/build.yml` |
| Nav, footer, section headings | `_data/site.yml` |
| Images | `assets/` |
| Page structure / design | `index.html`, `_layouts/default.html`, `assets/css/main.css` |

(The leading underscore on `_upgrades` and `_log` is Jekyll's convention for content collections.)

## Adding an upgrade

Create `_upgrades/my-new-part.md`:

```markdown
---
title: "Part Name"
brand: "Brand"
category: "Suspension"        # new categories appear as filters automatically
part: "PART-123"
price: "$1,000"
install: "+ $300 install"
weight: "+10 lb"              # optional — shown as a spec chip
specs:
  - "Chip one"
  - "Chip two"
link: "https://example.com"   # the Shop → button
order: 14                     # position in the grid
---

Why this part earns its place on the car. Markdown, shown on the card.
```

## Adding a field log post

Create `_log/2026-07-13-my-trip.md`:

```markdown
---
title: "Post title"
date: 2026-07-13 08:00:00 -0700
location: "Somewhere FSR"
image: assets/my-photo.jpeg
image_alt: "Accessible description of the photo"
style: full                   # full | split | split-reversed
position: "center 55%"        # optional CSS object-position for the photo
---

Post body in markdown.
```

Posts are ordered newest-first by `date`. `full` is a full-bleed photo with caption overlay; `split` puts the photo left / text right; `split-reversed` is text left / photo right.

## Local preview (optional)

Requires Ruby ≥ 3.x:

```sh
gem install bundler
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/westernharlot/.
