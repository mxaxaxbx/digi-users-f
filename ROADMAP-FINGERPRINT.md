# Roadmap 2 — Users Frontend

The Users frontend becomes responsible for integrating the SDK into every authentication flow.

## Milestone 1 — Login

### Current
- Email OTP
- outh (Google)

### Future
- Include Device Fingerprint

### Flow
1. Login
2. `DeviceSDK.generate()`
3. `POST /login`

## Milestone 2 — OAuth

Every OAuth provider should also include the fingerprint.

- Google → Users Backend → Device Identity

Same for:
- Google
- GitHub
- Microsoft
- Apple
- Future providers

## Milestone 3 — Token Refresh

Every refresh request should send:

```json
{
    "device_hash": "...",
    "device_version": 1
}
```

This lets the backend detect token theft.

## Milestone 4 — Device Management

New page: **Account** → **Devices**

Showing:
- Browser
- OS
- First seen
- Last seen
- Trusted
