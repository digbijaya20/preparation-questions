# SDE-II(MERN)

### Round-1 : DSA

1. Given an integer array arr[], find the subarray (containing at least one element) which has the maximum possible sum, and return that sum.

    Note: A subarray is a continuous part of an array.

    Examples:
    Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
    Output: 11

    Input: arr[] = [-2, -4]
    Output: -2

    Input: arr[] = [5, 4, 1, 7, 8]
    Output: 25

2. Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell.

    Note: Stock must be bought before being sold.

    Examples:
    Input: prices[] = {7, 10, 1, 3, 6, 9, 2}
    Output: 8

    Input: prices[] = {7, 6, 4, 3, 1} 
    Output: 0

    Input: prices[] = {1, 3, 6, 9, 11} 
    Output: 10

### Round-2 : LLD

1. Design the endpoints and schemas needed for redbus ticket booking.
   - Focus on search and booking
   - Booking with cancelation must be done
   - Assume pricing and payment part is done
2. Follow up questions after initial design
   - How will you design your schema and tables for sub routes ?
   - How will you store routes and subroutes in your table ?
   - Which table will you fetch for search ?
   - How will your store confirmed trips ?