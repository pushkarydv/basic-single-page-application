# basic-single-page-application

## a easy way to create basic single page application without even using things like router

example url

- https://basicspa.vercel.app/#three
- https://basicspa.vercel.app/#two

## usage

- add cdn link to your html file in end of body

  ```html
  <script src="https://cdn.jsdelivr.net/gh/pushkarydv/basic-single-page-application@main/index.js"></script>
  ```

- add a script just after cdn

- adding pages

  <h3> give id to a section of page and then add it using inbuilt function </h3>

  ```html
  <section id="page1"></section>
  ```

  you can add as many pages as you want

  ```js
  addPage("page1");
  ```

  this will basically hide it from page and it will be called when url changes fir example

  `https://basicspa.vercel.app/#three`
  this page will only show section of id three ather all pages added will be hidden

- setting main page of app

  ```js
  setMainPage("one");
  ```

- ## finally initialize it all

  ```js
  pagesInit();
  ```
