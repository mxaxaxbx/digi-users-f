# Project Roadmap & Architecture

## @digi-io/device-sdk

Device Identity SDK for browser and device fingerprinting.

This package provides a `DeviceSDK` class with a `generate()` method to extract various signals (browser, screen, timezone, language, hardware, etc.) and normalizes them into a stable SHA-256 fingerprint hash.

### Installation

```bash
npm install @digi-io/device-sdk
```

### Usage

#### Phase 1: Core Signals (completed)
By default, the SDK collects stable, non-intrusive core signals (browser, screen, language, timezone, and hardware):

```ts
import { DeviceSDK } from "@digi-io/device-sdk";

const sdk = new DeviceSDK();

sdk.generate().then((fingerprint) => {
    console.log("Device Hash:", fingerprint.hash);
    console.log("Device Data:", fingerprint);
});
```

#### Phase 2: Advanced Fingerprinting (completed)
To generate a more unique fingerprint, you can enable advanced collectors like Canvas, WebGL, and Audio:

```ts
import { DeviceSDK } from "@digi-io/device-sdk";

const sdk = new DeviceSDK({
    includeCanvas: true,
    includeWebGL: true,
    includeAudio: true,
    includeFonts: true,
    includePlugins: true,
    includeMediaDevices: true
});

const fingerprint = await sdk.generate();
console.log("Advanced Fingerprint:", fingerprint.hash);
```

#### Phase 3: Integrity & Risk Signals (completed)
You can also enable integrity checks and heuristics to detect bots, emulators, and tampering:

```ts
import { DeviceSDK } from "@digi-io/device-sdk";

const sdk = new DeviceSDK({
    // Advanced Fingerprinting
    includeCanvas: true,
    includeWebGL: true,
    
    // Integrity & Risk Signals
    detectIncognito: true,
    detectAutomation: true, // e.g. WebDriver
    detectHeadless: true,
    detectVM: true,
    detectDevTools: true,
    enableAntiTampering: true
});

const fingerprint = await sdk.generate();
console.log("Risk Score & Integrity Data:", fingerprint);
```

#### Phase 4: Identity Integration (completed)
The SDK also provides helpers for securely integrating with identity backend systems via signed payloads and API clients.

```ts
import { DeviceSDK, DeviceIdentity, DeviceAPI } from "@digi-io/device-sdk";

const sdk = new DeviceSDK();
const fingerprint = await sdk.generate();

// 1. Generate JWT-compatible Claims & Signed Payloads
const identity = new DeviceIdentity();
await identity.generateKeyPair(); // ECDSA Key Pair

const signedPayload = await identity.generateSignedDevicePayload(fingerprint, {
    risk_score: fingerprint.integrity?.entropyScore || 0,
    trusted_device: false
});

console.log("Signed Device Payload:", signedPayload);

// 2. Interact with Backend Device APIs
const deviceApi = new DeviceAPI({
    baseUrl: process.env.VUE_APP_URL_DG_USERS,
    getToken: () => localstorage.get('token')
});

// Register or fetch devices
const userDevices = await deviceApi.getDevices();
console.log("User Devices:", userDevices);

// Trust or Revoke Devices
await deviceApi.trustDevice('device_123');
await deviceApi.revokeDevice('device_123');
```

---

## Architecture Flow

```text
    @digi-io/device-sdk
        ┌───────────────────────────────────────┐
        │                                       │
        │  Signal Collection                    │
        │  Fingerprint Engine                   │
        │  Integrity Detection                  │
        │  Risk Signals                         │
        │  DeviceIdentity (ECDSA)               │
        │  DeviceAPI Client                     │
        │                                       │
        └───────────────────────────────────────┘
                        │
                        ▼
                Signed Device Payload
                        │
                        ▼
              Digi Users (Identity Authority)
 ┌─────────────────────────────────────────────────────┐
 │                                                     │
 │ Authentication                                      │
 │ OAuth                                               │
 │ JWT                                                  │
 │ Device Registry                                     │
 │ Device Resolver                                     │
 │ Session Manager                                     │
 │ Risk Engine                                         │
 │ Trust Engine                                        │
 │ Device APIs                                         │
 │ Event Publisher                                     │
 │                                                     │
 └─────────────────────────────────────────────────────┘
                        │
              JWT + Device Claims
                        │
      ┌────────────┬─────────────┬────────────┬────────────┐
      ▼            ▼             ▼            ▼
     Sky       Fireweb      Contextify      Atlas
```

---

## Roadmap 2 — Users Frontend

### Authentication
- [x] Login integration
- [x] OAuth integration
- [x] Refresh Token integration

*Note: All authentication requests should include the following payload format instead of sending only a hash:*
```json
{
    "fingerprint": {},
    "device_payload": "...",
    "signature": "..."
}
```

### Device Management

**Navigation Flow:** `New Account page` -> `Account` -> `Devices`

#### Capabilities
- [ ] View devices
- [ ] Rename device
- [ ] Trust device
- [ ] Revoke device
- [ ] Remove device
- [ ] Session history

#### Security Center (Future feature)
- [ ] Display Last login
- [ ] Display Risk score
- [ ] Display Trusted status
- [ ] Display Suspicious logins
- [ ] Display Active sessions
