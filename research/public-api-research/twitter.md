# Twitter API 

## URL Structure

Base URL - `https://api.twitter.com`

## Versioning

Versioning is done on URL. It is after base URL.
```
https://api.twitter.com/{version_number}
```

It has 3 version:
- Twitter API v2
- Twitter API v1.1 (standard and premium)
- Gnip 2.0 (enterprise)

## Authentication

It provides multiple way to authenticate:

1. OAuth 1.0a User Context
    ```bash
    curl --request POST \

    --url 'https://api.twitter.com/1.1/statuses/update.json?status=Hello%20world' \

    --header 'authorization: OAuth oauth_consumer_key="CONSUMER_API_KEY", oauth_nonce="OAUTH_NONCE", oauth_signature="OAUTH_SIGNATURE", oauth_signature_method="HMAC-SHA1", oauth_timestamp="OAUTH_TIMESTAMP", oauth_token="ACCESS_TOKEN", oauth_version="1.0"' \
    ```
2. OAuth 2.0 (App only)
    ```bash
    curl "https://api.twitter.com/2/tweets?ids=1261326399320715264,1278347468690915330" \
    -H "Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAFnz2wAAAAAAxTmQbp%2BIHDtAhTBbyNJon%2BA72K4%3DeIaigY0QBrv6Rp8KZQQLOTpo9ubw5Jt?WRE8avbi"
    ```
3. Basic authentication
    ```bash
    curl -v --compressed -u<email_address>:<password>
        "https://gnip-api.twitter.com/search/30day/accounts/<account-name>/prod/counts.json?query=from%3Atwitterdev"
    ```
4. OAuth 2.0 Authorization Code Flow with PKCE
    ```bash
    POST 'https://api.twitter.com/2/oauth2/token' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'refresh_token=bWRWa3gzdnk3WHRGU1o0bmRRcTJ5VUxWX1lZTDdJSUtmaWcxbTVxdEFXcW5tOjE2MjIxNDc3NDM5MTQ6MToxOnJ0OjE' \
    --data-urlencode 'grant_type=refresh_token' \
    --data-urlencode 'client_id=rG9n6402A3dbUJKzXTNX4oWHJ'
    ```

## Resource Naming Convention

They have been following REST principles for resource naming. They use plural noun for collections. For example:

- `https://api.twitter.com/2/tweets`
- `https://api.twitter.com/2/users`
- `https://api.twitter.com/2/spaces/:id`

## Pagination

Pagination is done through cursor.

Here is demo response:
```json
{
  "data": [
    {
      "created_at": "2020-12-11T20:44:52.000Z",
      "id": "1337498609819021312",
      "text": "Thanks to everyone who tuned in today..."
    },
    .
    .
    .
   {
      "created_at": "2020-05-06T17:24:31.000Z",
      "id": "1258085245091368960",
      "text": "It’s now easier to understand Tweet impact..."
    }
  ],
  "meta": {
    "oldest_id": "1258085245091368960",
    "newest_id": "1337498609819021312",
    "result_count": 100,
    "next_token": "7140w"
  }
}
```

## Rate Limit

The maximum number of requests that are allowed is based on a time interval, some specified period or window of time. The most common request limit interval is fifteen minutes. If an endpoint has a rate limit of 900 requests/15-minutes, then up to 900 requests over any 15-minute interval is allowed.

Detail inforamtion: https://developer.twitter.com/en/docs/twitter-api/rate-limits