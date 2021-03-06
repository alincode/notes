# GraphQL zero to hero

### Framework

* [Relay · A JavaScript framework for building data-driven React applications](https://facebook.github.io/relay/)
* [Apollo Client](https://www.apollographql.com/client/)

### Article / PPT

* [GraphQL IN Golang by appleboy](https://www.slideshare.net/appleboy/graphql-ingo-106518012)

### Example

* [steveluscher/zero-to-graphql](https://github.com/steveluscher/zero-to-graphql)
* [juffalow/express-graphql-sequelize-example](https://github.com/juffalow/express-graphql-sequelize-example)

### Video

* [YouTube](https://www.youtube.com/watch?v=VjXb3PRL9WI)


### Mise

* Query N + 1

```python
def get:
    users = User.objects.all()
    for user in users:
        print(user.score)

```