# IPL Directory Page

live link: https://ipl-directory-page.herokuapp.com/

Built with React, deployed to heroku

## Page Load Time

- Time to interactive: 1.2s (checked with Lighthouse)

  ![Image Before](./img/load-time.png)

## Optimization

Used react-visibility-sensor to only render components that are visible to the user hence cutting render time for invisible components.

- Before react-visibility-sensor: render time 170ms

  ![Image Before](./img/before-r-v-s.png)

- After react-visibility-sensor: render time 70ms

  ![Image After](./img/after-r-v-s.png)
