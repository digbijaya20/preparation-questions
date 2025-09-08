# 🚀 Full-Stack Developer Interview Preparation

This README contains a comprehensive list of **interview prep topics** for **React, Node.js, TypeScript, Databases, AWS/DevOps, Docker/Kubernetes, and CI/CD**. Use it as a checklist for revision.

---

## 📌 JavaScript

- `call`, `apply`, `bind`
- Closures
- Event loop (microtask vs macrotask)
- Debounce vs Throttle
- Shallow vs Deep copy
- Optional chaining (`?.`) & Nullish coalescing (`??`)
- Method chaining
- Event Bubbling & Capturing
- Array methods (map, filter, reduce, forEach, some, every, find, flat, etc.)

---

## 📌 TypeScript

- Interfaces vs Types
- Generics
- Utility types (`Partial`, `Pick`, `Omit`)

---

## 📌 React

- Global state management (Redux, Context, Zustand, Recoil)
- Clear storage when huge data in store
- Rendering large lists (e.g. 100k records → virtualization with `react-window`/`react-virtualized`)
- Lazy loading & Suspense
- Reduce bundle size (code splitting, tree shaking, dynamic imports)
- Optimization techniques (memoization, avoiding re-renders)
- Custom hooks
- `useMemo` vs `useCallback`
- Error Boundaries
- Global loading & error handling
- Folder structure best practices

---

## 📌 Jest / Testing

- Mocking multi-select component → check:

  - Defined
  - Visible
  - Handles click
  - Renders options on click

- Validation testing (frontend & backend)

---

## 📌 Node.js

- Inbuilt modules & classes:

  - Streams (read/write files)
  - Buffers (binary storage)
  - EventEmitter (custom events)
  - File system (fs)
  - Cluster

- Rate limiter
- Middleware
- Authentication & permissions:

  - Example: 10 routes → 8 need authentication, 4 need admin access

- Error handling
- Sockets vs Server-Sent Events (SSE)
- RBAC (Role-Based Access Control) example
- Folder structure & abstraction (separation of concerns)
- Session vs JWT authentication
- Microservices & single point of failure
- Message queues → Kafka vs RabbitMQ (producers & consumers)
- Caching with Redis
- ORM with migrations (TypeORM, Sequelize, Prisma)

---

## 📌 Next.js

- Middleware
- App Router
- Server vs Client components
- Dynamic routing → server or client?
- Server actions

---

## 📌 Databases

### General

- DB Transactions
- Indexing (benefits & limitations)
- Many-to-many relations (examples & management)
- Cascading (update & delete)
- ACID properties
- Deadlocks
- Connection pool (why & how)

### MongoDB

- `$lookup`
- `$facet`
- `$lookup` vs `populate` (when to use)
- `$unwind` vs `$group`

### Relational DB

- Stored procedures
- Triggers
- Views (can they write data?)
- Views vs Procedures (purpose & use case)

---

## 📌 DevOps & Cloud

- **AWS**

  - EC2
  - S3
  - Lambda
  - IAM
  - ElasticSearch
  - DynamoDB
  - Amazon RDS

- **Docker**

  - Dockerfile
  - `.dockerignore`
  - Docker Compose
  - Volumes, Networks, Env files

- **Kubernetes**

  - Basics (pods, deployments, services, config maps, secrets)

- **CI/CD**

  - Jenkins
  - GitHub Actions

---
