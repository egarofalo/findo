# Findo app
- URL: <code>https://tranquil-shelf-79713.herokuapp.com</code>

# API actions

## Get movies
- ENDPOINT: <code>/movies</code>
- METHOD: <code>GET</code>

## Get movie
- ENDPOINT: <code>/movies/{movie_id}</code>
- METHOD: <code>GET</code>

## Create movie (protected)
- ENDPOINT: <code>/movies</code>
- METHOD: <code>POST</code>
- BODY: <code>title</code>, <code>release_year</code>, <code>casting[]</code>, <code>directors[]</code> and <code>producers[]</code>

## Update movie (protected)
- ENDPOINT: <code>/movies/{movie_id}</code>
- METHOD: <code>PUT</code>
- BODY: <code>title</code>, <code>release_year</code>, <code>casting[]</code>, <code>directors[]</code> and <code>producers[]</code>

## Delete movie (protected)
- ENDPOINT: <code>/movies/{movie_id}</code>
- METHOD: <code>DELETE</code>

## Get people
- ENDPOINT: <code>/people</code>
- METHOD: <code>GET</code>

## Get person
- ENDPOINT: <code>/people/{person_id}</code>
- METHOD: <code>GET</code>

## Create person (protected)
- ENDPOINT: <code>/people</code>
- METHOD: <code>POST</code>
- BODY: <code>first_name</code>, <code>last_name</code>, <code>movies_as_actor_actress[]</code>, <code>movies_as_director[]</code> and <code>movies_as_producer[]</code>

## Update person (protected)
- ENDPOINT: <code>/people/{person_id}</code>
- METHOD: <code>PUT</code>
- BODY: <code>first_name</code>, <code>last_name</code>, <code>movies_as_actor_actress[]</code>, <code>movies_as_director[]</code> and <code>movies_as_producer[]</code>

## Delete person (protected)
- ENDPOINT: <code>/people/{person_id}</code>
- METHOD: <code>DELETE</code>

## Get user (protected)
- ENDPOINT: <code>/auth/user</code>
- METHOD: <code>GET</code>

# Authentication

## Login
- ENDPOINT: <code>/auth/login</code>
- METHOD: <code>POST</code>
- BODY: <code>email</code>, <code>password</code>

## Signup
- ENDPOINT: <code>/auth/signup</code>
- METHOD: <code>POST</code>
- BODY: <code>name</code>, <code>email</code>, <code>password</code> and <code>password_confirmation</code>

## Logout
- ENDPOINT: <code>/auth/logout</code>
- METHOD: <code>GET</code>

# Libraries/Frameworks used

## Backend
- Laravel 5.6
- Laravel Passport for API authentication

## Frontend
- jQuery
- React
- Bootstrap

# NOTES

## Every request must have set the following headers:
- <code>X-Requested-With</code> : <code>XMLHttpRequest</code>
- <code>Accept</code> : <code>application/json</code>

## Protected actions must have set the following headers:
- <code>Authorization</code> : <code>Bearer {access_token}</code>


