# OpenAI API 

## URL Structure

Base URL - `https://api.openai.com`

## Versioning

Versioning is done on URL. It is after base URL.
```
https://api.openai.com/v{version_number}
```

## Authentication

They used **API Key** for authentication. **API Key** is passed through *request header*.

```bash
curl 'https://api.openai.com/v1/models' \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

## Resource Naming Convention

They have been following REST principles for resource naming. They use plural noun for collections. For example:

- `https://api.openai.com/v1/models`
- `https://api.openai.com/v1/completions`

## Error handling

They have proper error handling mechanism. They pass detail error message.

### **API errors**

| CODE | OVERVIEW |
| --- | --- |
| 401 - Invalid Authentication | **Cause:** Invalid Authentication<br>**Solution:** Ensure the correct [API keys](https://platform.openai.com/account/api-keys) and requesting organization are being used. |
| 401 - Incorrect API key provided | **Cause:** The requesting API key is not correct.<br>**Solution:** Ensure the API key used is correct, clear your browser cache, or visit [API keys](https://platform.openai.com/account/api-keys). |
| 401 - You must be a member of an organization to use the API | **Cause:** Your account is not part of an organization.<br>**Solution:** Contact us to get added to a new organization or ask your organization manager to visit [Members](https://platform.openai.com/account/members). |
| 429 - Rate limit reached for requests | **Cause:** You are sending requests too quickly.<br>**Solution:** Pace your requests. Read the [Rate Limits](https://platform.openai.com/docs/guides/rate-limits). |
| 429 - You exceeded your current quota, please check your plan and billing details | **Cause:** You have hit your maximum monthly spend (hard limit) which you can view in the [Billing Limits](https://platform.openai.com/account/billing/limits).<br>**Solution:** Request a [quota increase](https://platform.openai.com/forms/quota-increase). |
| 429 - The engine is currently overloaded, please try again later | **Cause:** Our servers are experiencing high traffic.<br>**Solution:** Please retry your requests after a brief wait. |
| 500 - The server had an error while processing your request | **Cause:** Issue on our servers.<br>**Solution:** Retry your request after a brief wait and contact us if the issue persists. Check the [OpenAI Status](https://status.openai.com/). |

### Example error message:

```json
{
  "error": {
    "message": "",
    "type": "invalid_request_error",
    "param": null,
    "code": "invalid_api_key"
  }
}
```

## Rate Limit

|  | CHAT | CODEX | EDIT | IMAGE |
| --- | --- | --- | --- | --- |
| Free trial users | 3 RPM40,000 TPM | 3 RPM40,000 TPM | 3 RPM150,000 TPM | 5 images / min |
| Pay-as-you-go users (first 48 hours) | 60 RPM60,000 TPM | 20 RPM40,000 TPM | 20 RPM150,000 TPM | 50 images / min |
| Pay-as-you-go users (after 48 hours) | 3,500 RPM90,000 TPM | 20 RPM40,000 TPM | 20 RPM150,000 TPM | 50 images / min |

**RPM - Requests per minute*

**TPM - Tokens per minute*