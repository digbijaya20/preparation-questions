# Node.js Developer
### Round-1 : By Nimrit Agarwal

1. Build a basic express application and run it on postman
2. BUild a post endpoint which accepts the body { numberOfItem:11 } and based on the numberOfItem received create a dynamic array of todos and metadata as given below: 
[
    { id: 1, metadata: null },
    { id: 2, metadata: null },
    { id: 3, metadata: null },
    { id: 4, metadata: null },
    { id: 5, metadata: null },
    { id: 6, metadata: null },
    { id: 7, metadata: null },
    { id: 8, metadata: null },
    { id: 9, metadata: null },
    { id: 10, metadata: null },
    { id: 11, metadata: null }
]
3. Is id a query param or, path param in this(https://jsonplaceholder.typicode.com/todos/:id) API url
4. As part of the above post API fetch this(https://jsonplaceholder.typicode.com/todos/:id) API asynchronously. Means it accepts only single id , but if you are sending { numberOfItem:11 }, it should fetch all 11 objects for 11 ids parallely not waiting for the previous one to complete. (to understand better execute the third party API in browser).
5. Tell me the approach how to implement the above question(Ans: async/await and promise.all)
6. How to implement rate limit in this code
7. Suppose we are setting rate limiting as 4 and when from frontend the request is 11, it will through error. How to avoid the error and also execute rate limiting in backend?(Ans: Batching. we can execute 4 request at a time and then next 4 and so on without throwing error)
8. What's 429 error code?
9. What's the difference between 401 and 403 error code?
10. What's the difference between array methods .find and .include?
11. What's optional chaining?
12. What all db you have worked on(I answered PostgreSQL and MSSQL)
13. What's indexing?
14. You have two tables: 
Orders(order_id, customer_id, order_date, amount)
Customers(customer_id, name, city)

Write a query to find the top 3 customers who spent the most in 2024.
15. What's caching?
16. Have you used any caching method in your project?
17. Where do you need caching and how does it benifit?
18. What's cache warming?


## Solution code(1 to 4) and Query(14)

For code refer the path ./code/nineleaps

`SELECT 
    c.customer_id,
    c.name,
    SUM(o.amount) AS total_spent
    FROM Customers c
    JOIN Orders o 
    ON c.customer_id = o.customer_id
    WHERE o.order_date >= '2024-01-01'
    AND o.order_date < '2025-01-01'
    GROUP BY c.customer_id, c.name
    ORDER BY total_spent DESC
    LIMIT 3;`