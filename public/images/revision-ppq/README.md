# Past Paper Question images

This folder holds photos, graphs, maps and tables ("resources") used in
Full Past Paper Questions on the Revision > Paper Questions page.

## Convention

One subfolder per topic, matching the topic name used in
`sbl-revision-questions.js`, e.g.:

    public/images/revision-ppq/climate-change/2019-may-fig1.jpg
    public/images/revision-ppq/population/2021-nov-fig2.png

Reference an image from a question entry using its site path (leading
slash, no "public"):

    images: [
      { src: '/images/revision-ppq/climate-change/2019-may-fig1.jpg',
        alt: 'Line graph showing global mean temperature anomaly, 1950-2020',
        caption: 'Figure 1' }
    ]

## Guidelines

- Keep each file under ~500KB where possible (crop tightly to the
  figure/photo itself, save as JPG for photos or PNG for
  graphs/diagrams/screenshots with text).
- Always fill in `alt` with a short factual description of what the
  image shows, for screen readers.
- `caption` is optional and displays under the image (e.g. "Figure 1").
