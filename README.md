# Graphene Modal 

The goal for the Graphene Modal is to use 'old school' vanilla javascript. Graphene Modal is completely functional without any 3rd party JS libraries (like jQuery) or polyfills. The reason for this is to function on a wide range of browsers (as old as IE10) and be highly performant (since there are no dependencies).

If you are already loading jQuery this might not be the ideal modal. If you are building a site to keep your Javascript footprint as small as possible (for optimal performance), then you should consider this for your modals.

A very simple modal, but functional model:
* Minimal CSS and JavaScript
* Vanilla javascript 
* JavaScript require no 3rd party libraries
* Name-spaced CSS and JavaScript
* Responsive
* Ajax Forms
* Cookie Tracking

Only **1.1kB** combined total for the javascript file and css file minified and gzipped (without the optional Cookie JS file).

The CSS is super basic and includes very limited styles in the intention you will add your own custom styles. The browser prefixes have already been added, so there is not a dependency on an autoprefixer.

# Usage

The initial intention is to just have **ONE** Graphene Modal per page.

What it is not:
- This is not a 'lightbox' used for photo galleries.
- This is not a replacement for more feature rich modals/lightboxes.

# Demos
- [Auto Modal](https://brentrobbins.github.io/graphene-modal/auto.html)
- [Ajax Form Modal](https://brentrobbins.github.io/graphene-modal/ajax-form.html)
- [Cookie Modal](https://brentrobbins.github.io/graphene-modal/cookie.html)
- [Image Modal](https://brentrobbins.github.io/graphene-modal/image.html)

[Graphene modal demo home page](https://brentrobbins.github.io/graphene-modal/)


Used the [Milligram CSS framework](https://milligram.io/) on these examples to just make the example pages nice looking. 

# Support

Currently this modal has been tested and is supported on the following browsers and devices:
- Official list coming soon (essentially it's IE10+)

The modal is unsupported for:
- IE9 and older

# Future plans:
- Work on accessibility
- Simple build process for the src and dist directories (minifying css & js)
- Possibly a more 'modern' version of this modal that only supports IE11+. This might allow the ability to simplify the code base and add more functionality.

---

**License.** Graphene Modal is licensed under the MIT License.
