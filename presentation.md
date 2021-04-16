# Project 4

Saki, Jo, Chun, Michael

---

## Setting up 

(Saki)

---

## Deciding who does what 

![](https://media.giphy.com/media/cIh6lhWd1kJEvgISv9/giphy-downsized.gif)

---


![](https://i.imgur.com/WxwC7GV.png)


---

## Concept & Name

![](https://i.imgur.com/ZOIeIY0.png)


---

## How to 

![](https://i.imgur.com/zAAd57S.png)


---

## Estimates vs Actual 

(Jo)

---

![estimates and actuals](https://i.imgur.com/YpaxfCH.png)

---

<div style="font-size: 3rem;">

| Story | Estimate | Actual |
| --- | --- | --- |
| Deploy to Heroku | 1 | 1 |
| Responsive Design | 1 | 1 |
| Tests for general page | 2 | 1 |
| Test for POST route | 2 | 1 |
| Test for GET route | 2 | 1 |
| Static assets served correctly | 2 | 1 |
| POST request handling | 2 | 3 |
| Page shows all posts | 2 | 2 |
| Create server and setup | 2 | 2 |
| Page with form to create posts | 2 | 2 |
| --- | --- | --- |
| TOTAL | 18 | 15 |

</div>

---

## Testing

![](https://i.imgur.com/LYsTdvz.png)

----

```javascript
it("can run a test", () => {
    assert.equal(1, 1);
  });
```
```javascript
it("creates a homepage", () => {
  cy.visit('http://localhost:3000/');
  cy.get('[src="twaddle2.png"]').should('be.visible')
});
```
```javascript
it("can navigate pages", () => {
  cy.visit("http://localhost:3000/");
  cy.contains("Write a new post").click();
  cy.url().should("include", "/add-blog");
});
```

---

### Reusable tests :nerd_face: 

```javascript
it("creates a new blog post", () => {
  addTestBlog();
})
```

```javascript
it("deletes a blog post", () => {
  deleteBlog();
})
```

---

```javascript
function addTestBlog() {
  cy.visit('http://localhost:3000/add-blog');
  cy.get('form').find('input[name="message"]').type("hi");
  cy.get('form').submit();
  cy.visit('http://localhost:3000');
  cy.get('ul').contains('hi');
}

function deleteBlog() {
  cy.visit('http://localhost:3000');
  cy.get('form').find("button[value='message2']").click()
  cy.get('ul').contains('hi').should('not.exist');
}
```

---

![](https://media.giphy.com/media/3VydkbG6UOcUg/giphy.gif)

---

### :question: How can we keep our testing concerns separate?

![](https://media.giphy.com/media/lKXEBR8m1jWso/giphy.gif)

---

## Design

---

![](https://media.giphy.com/media/1Zx2wssVsQhWzald5F/giphy.gif)

---

![](https://i.imgur.com/oykgbSP.png)

---

![](https://i.imgur.com/qbYNa7y.png)

---


## Demo

(code side by side)

---

## Code

(Chun)

---

### Challenges

- templates ([inspired by Oli's glitch from the extra resources](https://glitch.com/~vanilla-node-templating))

---

### Things we learned

- Object.keys gets an array of keys from an object:
```javascript
let blogIds = Object.keys(blogs);
```

- Heroku does not auto-update unless you set it up to do that! :sweat_smile: 

- Use `process.env.PORT` when deploying live as well as locally:

```javascript
const PORT = process.env.PORT || 3000;
```

---

### Questions

:question: Since we only run cypress locally, should we hide it from heroku?
:question: - How can we avoid repeating html headers?
:question: How can we keep our testing concerns separate? (I.e. how best to do the post blog test and delete blog test so that they don't rely on each other?

---

![thanks for listening!](https://media.giphy.com/media/l3vR4yk0X20KimqJ2/giphy.gif)
