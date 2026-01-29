FarmLokal – Backend Assignment 

FarmLokal Backend is a backend service built as part of the FarmLokal take-home assignment. It focuses on backend performance, API design, caching, and real-world reliability patterns.

---

Purpose:

FarmLokal is a hyperlocal marketplace that connects households directly with local farmers and producers.
This backend service is designed to support fast product listing, secure token handling, and external service integrations.

The goal of this assignment was to demonstrate backend engineering fundamentals rather than frontend or UI development.

---

Features:

• Product listing API with pagination, sorting, and filtering
• Performance-optimized database queries using MySQL indexes
• OAuth2 client-credentials based authentication flow
• Redis-based access token caching
• External API integration with timeout handling
• Webhook endpoint for receiving async callbacks
• Modular and clean backend architecture
• Production-ready deployment setup

---

Technology Stack:

Backend:
Node.js, TypeScript, Express.js, MySQL (Prisma ORM), Redis, Axios

---

Deployment:
Backend deployed on Render
Database hosted on managed MySQL
Redis provided via managed Redis service

---

API Overview:

GET /products
Returns a paginated list of products with sorting and filtering support.

GET /auth/token
Fetches an OAuth2 access token and caches it in Redis to avoid repeated token requests.

GET /external/sync
Calls a mock external API with timeout handling.

POST /external/webhook
Receives callback events and is designed to safely handle duplicate requests.

---

Performance & Caching:

The product listing API is treated as the most performance-critical endpoint.

• Indexed database columns for frequent queries
• Cursor-based pagination to avoid offset scan penalties
• Minimal database queries per request
• Redis caching for authentication tokens and frequently accessed data

With Redis enabled in production, the backend is designed to meet the required performance targets.

---

External API Handling:

Public mock APIs are used for external integrations since the focus is on integration handling rather than real data accuracy.

Webhook handling is designed to be idempotent to safely process duplicate events.

---

Notes & Trade-offs:

• Redis is optional during local development and fully enabled in production
• External APIs are mocked to keep the focus on backend behavior
• Frontend is intentionally excluded to stay aligned with the assignment scope

---

Deployment:

The backend is deployed on Render using managed database and Redis services.
All required environment variables are configured on the deployment platform.

