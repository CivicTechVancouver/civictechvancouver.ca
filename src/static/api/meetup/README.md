# Store API results as static assets

## events.json

Because we only need to update this json once a month, it's not worth enabling external API calls.

The API for the json file is: http://api.meetup.com/Civic-Tech-Vancouver/events?status=past,upcoming&page=20

### curl command (in src directory)
$ curl -o static/api/meetup/events.json "http://api.meetup.com/Civic-Tech-Vancouver/events?status=past,upcoming&page=20"

### yarn command (in src directory)
$ yarn fetchMeetup
