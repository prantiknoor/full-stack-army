# Notion API 

## URL Structure

Base URL - `https://api.notion.com`

## Versioning

Versioning is done on URL. It is after base URL.
```
https://api.notion.com/v{version_number}
```

## Authentication

They used **API Key** for authentication. **API Key** is passed through *request header*.

```bash
curl 'https://api.notion.com/v1/pages/b55c9c91-384d-452b-81db-d1ef79372b75' \
  -H 'Notion-Version: 2022-06-28' \
  -H 'Authorization: Bearer '"$NOTION_API_KEY"''
```

## Resource Naming Convention

They have been following REST principles for resource naming. They use plural noun for collections. For example:

- `https://api.notion.com/v1/pages`
- `https://api.notion.com/v1/users`

For individual item, they used `{BASE_URL}/v1/pages/:pageId` format.

## Error handling

They have proper error handling mechanism. They pass detail error message.

```json
{
  "object": "error",
  "status": 429,
  "code": "rate_limited",
  "message": "You have been rate limited. Please try again in a few minutes."
}
```

## Pagination

Pagination is done by **cursor**. For example:

```json
{
  "object": "list",
  "results": [],
  "next_cursor": "59833787-2cf9-4fdf-8782-e53db20768a5",
  "has_more": false,
  "type": "page",
  "page": {}
}
```

## Rate Limit

The rate limit for incoming requests per integration is an average of three requests per second.

### **Limits for property values:**

| Property value type | Inner property | Size limit |
| --- | --- | --- |
| [Rich Text object](https://developers.notion.com/reference/rich-text) | text.content | 2000 characters |
| [Rich Text object](https://developers.notion.com/reference/rich-text) | text.link.url | 2000 characters |
| [Rich Text object](https://developers.notion.com/reference/rich-text) | equation.expression | 1000 characters |
| Any array of [rich Text object](https://developers.notion.com/reference/rich-text) |  | 100 elements |
| Any URL |  | 2000 characters |
| Any email |  | 200 characters |
| Any phone number |  | 200 characters |
| Any multi-select |  | 100 options |
| Any relation |  | 100 related pages |
| Any people |  | 100 users |

