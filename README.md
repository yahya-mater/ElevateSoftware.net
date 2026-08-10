# Elevate Software — Website

A static site (plain HTML/CSS/JS, no build step, no framework) for Elevate Software's
studio site. All content that changes regularly — capabilities, the systems product
line, portfolio projects, and team bios — lives in **`data.json`**. The rest of this
file is a contract for that JSON, written so an AI agent or a non-technical person can
safely regenerate or update it without breaking the site.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure and markup. Rarely needs editing for content changes. |
| `style.css` | All styling. |
| `app.js` | Fetches `data.json` and renders capabilities, systems, projects, and team into the page. Do not need to touch this for routine content updates. |
| `data.json` | **The only file that should change for routine content updates.** Documented in full below. |
| `assets/projects/` | Project screenshots. Filenames referenced by `image`/`images` fields in `data.json`. |
| `assets/team/` | Team member photos. Filenames referenced by `image` fields in `data.json`. |

## Running locally

`app.js` loads `data.json` via `fetch()`, which browsers block for pages opened
directly as a local file (`file:///...`). To preview changes locally, serve the folder
over HTTP instead of double-clicking `index.html`:

```
python3 -m http.server
```

then open `http://localhost:8000`. No server-side code is involved — any static file
server works. Once deployed to GitHub Pages (or any real host), this isn't an issue;
`fetch()` works normally over `https://`.

## How editing `data.json` reaches the live site

This is a plain static fetch of a JSON file — there's no build step, no bundler, no
database. Writing a new, valid `data.json` to this path in the repo (e.g. via the
GitHub Contents API) and letting it deploy is the entire update mechanism. The page
re-fetches `data.json` fresh on every load.

## Ground rules for anything generating this file

1. **Output must be valid JSON.** No comments, no trailing commas, no unquoted keys.
   The site shows a visible error message on the page if this file fails to parse or
   fetch — always validate before writing.
2. **Every field documented below as optional may be omitted entirely.** Don't write
   empty strings, empty arrays, or `null` placeholders for data you don't have — just
   leave the key out. The rendering code checks for the field's presence and adapts
   (falls back to a generated graphic, hides a section, etc.).
3. **Never invent facts.** Don't fabricate client names, testimonials, metrics,
   statistics, team member names/bios, or project outcomes that weren't provided. If
   information for a field isn't available, omit the field rather than guessing
   plausible-sounding content. This applies especially to `client` (see below) —
   adding a client's name/link implies their endorsement, which requires their actual
   permission.
4. **Image and video paths are references, not uploads.** Adding a path like
   `"assets/projects/foo.jpg"` to this file does not create that file. If the actual
   image doesn't exist at that path yet, the site automatically falls back to a
   generated placeholder graphic (projects) or initials (team) — this is intentional
   and safe, not a bug. Use realistic, consistent kebab-case filenames so a human can
   later drop in the real file at the exact path referenced.
5. **Preserve existing entries unless explicitly asked to remove or replace them.**
   When adding a new project/team member/system, append to the relevant array rather
   than replacing the whole file, unless the task is specifically "replace X."

---

## Schema reference

Top-level object with four arrays. All four keys are optional at the top level (the
site renders an empty section if one is missing), but in practice all four are
normally present.

```json
{
  "capabilities": [ /* array of strings */ ],
  "systems":      [ /* array of system objects */ ],
  "projects":     [ /* array of project objects */ ],
  "team":         [ /* array of team member objects */ ]
}
```

### `capabilities`

Array of short strings shown in the scrolling capability strip near the top of the
page. Plain strings only, no objects.

```json
"capabilities": ["DESKTOP APPS", "MOBILE APPS", "MANAGEMENT SYSTEMS"]
```

- Convention: ALL CAPS, short (2–4 words). Not enforced by code, just visual style.
- Order doesn't matter functionally.

---

### `systems` — the product line (in-house systems built to resell/customize)

Distinct from `projects`. These are systems the studio builds proactively as
reusable, customizable products (e.g. a CRM+Inventory base) — not bespoke work done
for a specific past client. Rendered as cards with a status badge.

```json
{
  "name": "Business Management System",
  "tagline": "CRM + Inventory",
  "desc": "One or two sentences describing the system.",
  "status": "in-development",
  "tech": ["React"],
  "industries": ["General business", "Retail"]
}
```

| Field | Required | Type | Notes |
|---|---|---|---|
| `name` | Yes | string | System name. |
| `tagline` | No | string | Short subtitle shown under the name. |
| `desc` | Yes | string | One to two sentences. |
| `status` | No | string | One of `"live"`, `"in-development"`, `"planned"`. Defaults to "Planned" display if omitted or unrecognized. Controls the colored status badge (cyan/blue/muted respectively). **Only mark something `"live"` once it's actually deployed and usable.** |
| `tech` | No | array of strings | Shown as tags alongside `industries`. |
| `industries` | No | array of strings | Target industries/use cases. Shown as tags alongside `tech`. |

There is currently no `link`/demo-URL field wired up in the UI. When a system goes
live and has a real deployed URL, that's a small code addition (not just a data
addition) — flag it rather than adding an unused `link` key.

---

### `projects` — past/completed work (the case-study portfolio)

Each project becomes a clickable card in the "Work" grid; clicking opens a modal with
the full case study.

```json
{
  "tag": "Management System",
  "title": "School Finance Manager",
  "desc": "One or two sentences — what it is and who it's for.",
  "image": "assets/projects/school-finance-manager.jpg",
  "images": [
    "assets/projects/school-finance-manager-1.jpg",
    "assets/projects/school-finance-manager-2.jpg"
  ],
  "videoEmbed": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  "videoFile": "assets/projects/school-finance-manager-demo.mp4",
  "highlights": [
    "Short, specific bullet point",
    "Another short, specific bullet point"
  ],
  "client": {
    "name": "Acme School District",
    "url": "https://example.com"
  }
}
```

| Field | Required | Type | Notes |
|---|---|---|---|
| `tag` | Yes | string | Short category label shown on the card (e.g. `"Desktop App"`, `"Mobile App"`, `"Web App"`, `"Management System"`, `"Custom Build"`, `"Browser Extension"`, `"Website"`). Free text — not a fixed enum, but stay consistent with existing values where the project genuinely fits one. |
| `title` | Yes | string | Project name. |
| `desc` | Yes | string | One to two sentences, shown on the card and at the top of the modal. |
| `image` | No | string (path) | Single image. Used as (a) the card thumbnail and (b) the modal image if `images` isn't set. If the file at this path doesn't exist, the card/modal falls back gracefully — see rule 4 above. |
| `images` | No | array of strings (paths) | A photo album for the modal. **If present, this takes priority over `image` for the modal gallery** (but the card thumbnail still prefers `image`, falling back to `images[0]` if `image` is absent). One entry = shown plain, no gallery chrome. 2+ entries = full gallery with prev/next arrows, a counter, and a thumbnail strip. |
| `videoEmbed` | No | string (URL) | A plain YouTube or Vimeo URL (e.g. `youtube.com/watch?v=...` or `youtu.be/...` or a `vimeo.com/...` link). Automatically converted to an embeddable URL — don't pre-convert it. |
| `videoFile` | No | string (path) | Path to a self-hosted `.mp4`. Only used if `videoEmbed` is absent — **embed takes priority over a self-hosted file** when both are present. |
| `highlights` | No | array of strings | Short, specific, factual bullet points shown in the modal (e.g. "Cut double-bookings to zero across 3 branches"). Must be genuinely true/provided — see rule 3. |
| `client` | No | object `{ name, url? }` | **Only include this if the client has explicitly agreed to be publicly credited.** See the "Client attribution" section below for detailed rules — this is the field most likely to cause real-world harm if handled carelessly. |

**Media priority in the modal:** video (if any) renders first, gallery/image renders
below it. A project can have both, either, or neither.

**Client attribution — read before populating:**
- Never add a `client` object unless the client has actually agreed to be named
  publicly. Silence or the absence of an objection is not consent.
- For companies/businesses: `{"name": "Acme Co.", "url": "https://acme.com"}` is the
  normal, encouraged form once permission is granted.
- For individuals: default to omitting `url` even with permission, and prefer a first
  name or a generic descriptor (`"Sarah (private client)"`) over a full name, unless
  the person has specifically asked to be linked/named in full. A private individual's
  full name tied to a specific piece of software (especially anything revealing about
  their personal life) is a real privacy consideration, not a formality.
- Academic/personal projects with no paying client (e.g. a university assignment) and
  in-house products being built for future sale (not yet sold to anyone) should not
  have a `client` field at all — there isn't one.
- When in doubt, omit the field. A project with no credit is the safe default; a
  project with a fabricated or unauthorized credit is the harmful outcome to avoid.

---

### `team`

Each entry becomes a clickable card in the "Team" grid; clicking opens a modal with
the bio and links.

```json
{
  "initials": "AB",
  "name": "Full Name",
  "role": "Full-stack / Web",
  "image": "assets/team/full-name.jpg",
  "bio": "One to three sentences about what they work on.",
  "links": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "website": "https://example.com",
    "portfolio": "https://example.com",
    "twitter": "https://twitter.com/username"
  }
}
```

| Field | Required | Type | Notes |
|---|---|---|---|
| `initials` | Yes | string | Shown as the avatar fallback (2 characters, e.g. `"AB"`) whenever `image` is absent or fails to load. Always include this even when `image` is set. |
| `name` | Yes | string | Full name as it should display publicly. |
| `role` | Yes | string | Short role label (e.g. `"Mobile / iOS & Android"`). |
| `image` | No | string (path) | Photo. Falls back to `initials` if absent or the file fails to load. |
| `bio` | No | string | Shown in the modal only (not on the card). Omit if not provided — don't invent one. |
| `links` | No | object | Any subset of the keys shown above. Unrecognized keys still render, using the key name as the label (capitalized as written) — so a key like `"dribbble"` works fine without a code change, it just won't get a nicely formatted label like the known ones do. |

---

## Quick checklist for an AI generating/updating this file

- [ ] Output is valid JSON (no comments, no trailing commas).
- [ ] Every fact included (highlights, bios, client names, stats) was actually
      provided — nothing invented or embellished.
- [ ] `client` only added where explicit permission was confirmed, and treated
      conservatively for individuals.
- [ ] New `image`/`images`/`videoFile` paths follow the `assets/projects/...` or
      `assets/team/...` convention, using descriptive kebab-case filenames, even if
      the actual file isn't uploaded yet.
- [ ] `videoEmbed` is a plain shareable URL, not a pre-built embed/iframe URL.
- [ ] `status` on new `systems` entries reflects reality — don't mark something
      `"live"` unless it's actually deployed.
- [ ] Existing array entries are preserved (appended to, not overwritten) unless the
      task explicitly calls for replacing or removing something.
