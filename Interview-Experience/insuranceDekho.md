Round-1

1. Data Validation

How will you validate the request parameters in /getUsers API?

Why do we separate validation logic from controller logic?

What happens if validation fails? How will the API respond?

Why should we use express-validator instead of custom validation?

2. Filtering Logic

Which filters does your /getUsers API support?

How do you handle optional filters such as name, mobile, and city?

Why do we push all filters inside a single filter object?

How do you prevent unindexed fields from slowing down queries?

3. Pagination (Cursor-based)

What is cursor-based pagination, and why is it better than skip-limit?

How do you handle direction = next and direction = prev?

Why is \_id used as the cursor?

How does cursor pagination improve scalability for large datasets?

Round-2.

1. ARCHITECTURE QUESTIONS
   REST API, Queue Processing, Database Design

Explain the complete architecture of your system from API Gateway → Controller → Service → Queue → Worker → Database.

How do you decouple long-running tasks using RabbitMQ or a message queue?

Why did you choose Queue over direct processing?

How do you design idempotent queue consumers to avoid duplicate processing?

How do you scale queue consumers horizontally?

PDF Upload in Chunks Using Streams

Why is streaming better than full-buffer uploads while handling large PDFs?

Explain how you would implement chunk-based upload and reconstruct the file on the server.

How do you handle interruptions when a chunk upload fails?

How do you verify file integrity after reassembly (e.g., checksum)?

Middleware, Security, Caching

What middleware do you normally use in Node.js?

How do you implement API rate limiting (Redis + middleware)?

How do you handle authentication and role-based authorization in middleware?

How do you implement server-side caching using Redis for your APIs?

What is the strategy to decide what should be cached and for how long?

#Controller & Service Layer

Why should business logic be kept in the service layer and not in the controller?

How do you structure large Node.js applications for scalability?

How do you make services reusable across multiple modules?

Concurrency Work

How do you handle concurrency when multiple workers/processes update the same record?

What MongoDB operations are atomic?

How do you prevent race conditions in your PDF-processing service?

How do you use Redis or DB locks for concurrency control?

#Publisher–Consumer (RabbitMQ)

Explain how a publisher sends messages for PDF processing.

What are ack, nack, prefetch, durable queues, dead-letter-exchanges?

How do you guarantee that no message is lost in RabbitMQ?

How do you retry failed consumer jobs?

CORS Setup, PM2 Clustering, EC2 & Nginx

How does CORS work and how do you configure it securely?

What is PM2 cluster mode and how does it increase concurrency in Node.js?

How do you deploy a Node.js service on EC2?

Explain Nginx reverse proxy setup for Node.js.

How do you perform zero-downtime deployments?

How do you handle environment variables in EC2?

2. LANGUAGE & PACKAGE QUESTIONS
   Node.js

What is the event loop and how do you avoid blocking it?

Difference between Streams vs Buffers in Node.js.

When would you use worker threads?

#PDF Parser

Which PDF parsing libraries have you used?

What are the challenges in extracting text or metadata from PDFs?

#MongoDB

Why did you choose MongoDB for this system?

What indexing strategy do you follow for high-read APIs?

How do you optimize pagination for large datasets?

Explain MongoDB aggregation pipeline performance tuning.

TypeScript

How do interfaces improve the maintainability of large projects?

Difference between type and interface?

How do you ensure type safety in service-to-service communication?

3. RESOURCES QUESTIONS
   RabbitMQ

Explain your RabbitMQ architecture from exchange → queue → consumer.

What is the purpose of dead-letter queues?

How do you scale your RabbitMQ consumers in production?

#Redis

When do you use Redis — caching, locking, pub/sub?

How do you implement a Redis distributed lock?

Explain cache invalidation strategies.

#S3

How do you upload large files to S3 efficiently? (multi-part upload)

How do you validate file type and size before upload to S3?

How do you generate pre-signed URLs?

#EC2

How do you configure security groups for backend deployments?

How do you perform autoscaling on EC2?

How do you configure logs and monitoring on EC2?

Docker — Horizontal Scaling

Why do we containerize the Node.js API?

Explain how you scale using multiple containers behind a load balancer.

How do you manage logs for multiple containers?

PM2

What is the difference between fork and cluster mode?

How do you monitor worker crashes in PM2?

4. ERROR HANDLING & RETRIES
   Retry Failed Jobs

How do you implement retry logic for failed RabbitMQ jobs?

What is exponential backoff and why is it used?

What conditions make a job eligible for retry vs discard?

#Try/Catch and Centralized Error Handling

Why do you need a centralized error-handling middleware?

How do you send structured error responses to the client?

How do you differentiate between operational errors and programmer errors?

#Error Logging

How do you track which PDF failed during processing?

How do you store logs — text logs, Mongo logs, ELK, CloudWatch?

How do you debug consumer failures in production?

#System Reliability

How do you ensure at-least-once and at-most-once deliveries in your queue system?

How do you make PDF processing idempotent so it doesn't process twice?

What will you do if the system crashes in the middle of PDF processing?

code for bubbule sort ? in o(n) ?

Round-3

TECH STACK QUESTIONS (React + Node.js + MongoDB)
React (Frontend)

How do you handle real-time data updates from backend using sockets in React?

What is the difference between client-side polling vs WebSockets vs Server-Sent Events?

How do you manage global state for insurance result fetching (Redux, Context, Zustand)?

How do you safely store session details on the frontend?

How do you handle loading states for multiple insurance partners?

Node.js (Backend)

Explain the full flow from user request → insurance service → 3rd-party APIs → response.

How do you create non-blocking API calls to multiple insurance partners?

How do you optimize Node.js CPU usage with PM2 cluster mode?

How do you design a service layer so that different partners can be added easily?

How do you handle concurrency when hitting multiple external APIs at once?

MongoDB

What schema design did you follow for storing insurance responses?

How do you store 25 insurance responses in a single document?

How do you index the lead, requestId, and insurance partner fields?

What is the best DB design for storing partner-wise response status?

How to immplement Sharding ?

✅ ARCHITECTURE QUESTIONS

1. REST API + PM2 Clustering

Why does Node.js need clustering?

How does PM2 cluster mode improve throughput?

How do you handle shared memory or caching when using multiple cluster workers?

What happens if two workers try to write the same DB record?

2. Request/Response Caching with Redis

Why do we need caching when fetching insurance quotes?

Why 1000 seconds TTL?

How do you invalidate Redis cache when user modifies lead data?

What happens when cached data is partially stale?

How do you store complex objects (25 insurance responses) in Redis?

How do you avoid cached errors being returned to the client?

3. Method 1 – Controller -> Service (Without Queue)

What are the advantages and disadvantages of calling all insurance partners directly from the controller?

How do you parallelize external insurance API calls without blocking the event loop?

What happens if one partner API is very slow?

How do you implement timeouts for each partner?

How do you merge all partner responses and return a single response?

How do you track which partners succeeded and which failed?

4. Method 2 – Queue Based (Publisher → Consumer)

Why did you introduce a queue system (RabbitMQ / Redis Queue)?

What is the difference between publishing the lead vs full request data to the queue?

How do you ensure each partner API call runs independently inside a consumer?

How does real-time data flow back to the frontend using WebSockets?

How do you maintain ordering of partner responses?

How do you retry partner API calls when queue processing fails?

How do you avoid duplicate consumer processing?

How do you ensure idempotency in consumers?

5. Real-time Data (WebSocket / Socket.io)

How do multiple insurance results get sent to the client in real time?

How do you map socket users to specific leads?

How do you push each partner’s response immediately through sockets?

How do you handle disconnections and reconnections?

How do you maintain socket connection when using PM2 cluster mode?

How do you handle socket load balancing behind NGINX?

6. Polling Mode

Why do you support both real-time socket mode and polling mode?

When should polling=true be used?

How do you store polling results so frontend can fetch later?

How do you track the status of each insurance partner in polling mode?

7. Middleware + Session + Logging

How do you capture request & response logs by lead/session id?

How do you design middleware for end-to-end request tracking?

How do you log partner-wise request time, response time, and errors?

How do you store logs in MongoDB vs ElasticSearch?

What do you log for performance and debugging?

✅ INFRASTRUCTURE & SECURITY QUESTIONS
CORS

What is CORS and why do we need it for React → Node communication?

How do you configure a secure CORS setup?

What security risks come with Access-Control-Allow-Origin: \*?

Compression

Why enable request/response compression?

How much performance improvement do you get from gzip compression?

Nginx + EC2

How do you configure Nginx as reverse proxy for Node.js?

How do you handle SSL termination on Nginx?

How do you configure load balancing between multiple PM2 cluster workers?

How do you deploy Node.js to AWS EC2 with zero downtime?

Redis / Mongo / Queue

How do you scale Redis in production?

How do you scale MongoDB with replica sets & sharding?

How do you monitor queue backlog and performance?

✅ ERROR HANDLING
Retry System

How do you retry failed partner API calls?

How many retries should a partner have before marking failure?

How do you implement exponential backoff?

How do you store retry attempts in MongoDB?

Central Error Handler

How do you design a global error middleware?

How do you differentiate between business errors and server errors?

How do you handle timeout errors from 3rd-party partners?

Failure Tracking

How do you mark which insurance partner failed in DB?

How do you store partial responses?

How do you notify frontend when some partners fail?
