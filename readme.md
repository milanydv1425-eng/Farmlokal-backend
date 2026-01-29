# FarmLokal – Backend Assignment

FarmLokal Backend is a robust service designed to demonstrate high-performance API design, secure authentication, and resilient integration patterns.

## 🚀 Purpose

FarmLokal is a hyperlocal marketplace connecting households directly with local farmers. This service supports fast product discovery, secure token management, and reliable external service integrations.

> **Note:** This project focuses on backend engineering fundamentals; frontend components are intentionally excluded.

---

## ✨ Features

* **Product Listing API:** High-performance discovery with pagination, sorting, and filtering.
* **Optimized Database:** MySQL indexing and efficient query design.
* **Secure Auth:** OAuth2 client-credentials flow.
* **Redis Caching:** Token and data caching to minimize latency.
* **Resilient Integration:** External API handling with strict timeout policies.
* **Idempotent Webhooks:** Securely handle asynchronous callbacks and duplicate requests.
* **Clean Architecture:** Modular, TypeScript-based codebase.

---

## 🛠 Technology Stack

* **Runtime:** Node.js (TypeScript)
* **Framework:** Express.js
* **Database:** MySQL via Prisma ORM
* **Caching:** Redis
* **HTTP Client:** Axios
* **Hosting:** Render (Backend), Managed MySQL & Redis

---

## 🛰 API Overview

| Endpoint | Method | Description |
| --- | --- | --- |
| `/products` | `GET` | Paginated product list with filters. |
| `/auth/token` | `GET` | Fetches/caches OAuth2 access tokens. |
| `/external/sync` | `GET` | Syncs data via external API with timeout logic. |
| `/external/webhook` | `POST` | Processes idempotent async callbacks. |

---

## ⚡ Performance & Caching

The `/products` endpoint is optimized for high traffic through:

* **Indexing:** Database columns are indexed for frequent query parameters.
* **Cursor Pagination:** Prevents "offset scan" performance degradation.
* **Redis Integration:** Production environments leverage Redis to eliminate redundant auth requests and database hits.

---

## 📝 Trade-offs & Notes

* **Mock APIs:** Used for external integrations to focus on logic rather than data accuracy.
* **Idempotency:** Webhook handling is built to be safe against duplicate events.
* **Local Dev:** Redis is optional for local setups but mandatory for production performance.

---
