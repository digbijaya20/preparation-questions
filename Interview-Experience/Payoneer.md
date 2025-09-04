R1-(React) through barraiser

1.	Comments Analytics – Chart by Post
Instructions
Build a React + TypeScript application that visualizes comment distribution.
•	The app must fetch posts and their comments.
•	Display a chart (bar or pie) showing the number of comments per post.
•	Use useMemo to compute counts efficiently when data changes.
•	Desktop: chart + table side by side. Mobile: chart stacked above table.


APIs
•	Posts: GET https://jsonplaceholder.typicode.com/posts
•	Comments: GET https://jsonplaceholder.typicode.com/comments


Example Response (comments, 2 items)
[
  { "postId": 1, "id": 1, "name": "id labore ex et", "email": "Eliseo@gardner.biz", "body": "laudantium enim..." },
  { "postId": 1, "id": 2, "name": "quo vero reiciendis", "email": "Jayne_Kuhic@sydney.com", "body": "est natus enim..." }
]

2. Write a program to check the valid paranthesis.

