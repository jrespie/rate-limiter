# Rate limiting example
This is a basic example of an endpoint that has a rate limit.
It is lifted from this tutorial by [Odhiambo Paul at section.io](https://www.section.io/engineering-education/nodejs-rate-limiting/).

## Instruction
- Clone this repo
- Install dependencies (`npm i`)
- Run the package (`npm start`)
- Hit `http://localhost:3000/posts` to exercise the endpoint
- Hit it five times in the space of a minute to hit the rate limit!

## Exercises
* Play with the values in `index.js` and change the rate limits

* Fire up a load testing tool such as [K6](https://k6.io/), [Locust](https://locust.io) or [DDoSify](https://github.com/ddosify/ddosify), and see if you can hit the rate limit this way. You could even use [Postman](https://www.postman.com/).

* Check out this article by Forbes Lindesay on [different ways to implement rate limiting](https://levelup.gitconnected.com/rate-limiting-a0783293026a) - which one are we using here?