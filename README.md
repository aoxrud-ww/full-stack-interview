Implement a notification dialog system

There is an API that returns notifications unordered
- `getNotifications() => Promise.resolve([ { id: 1, unixTimestamp: 12345, message: "Lorem ipsum" }, ... ]);


Requirements:
- Add a "Log" button that will console.log the current open notifications
- Show the notifications in order of most recent first.
- Each notifications should be able to be closed.
- If multiple notifications are present, they should be stacked on top of each other.
- The notifications should show on the top-right corner of the page without pushing the contents down.
- The notification should have a black border and the contents should be vertically centered.



Follow up questions:
- getNotifications can only be called once a day and it had already been called for the day? How do we persist the notifications across page refresh?
- Add a button to reset the notifications back to the `getNotifications` response.
- How do you make the notifications accesible?
- How would you show/hide all notifications.


Things I would be looking for:
- Know about Array.sort, can they explain how it works?
- Understand basic usage of promises and how it works?
- Ability to create templating system from scratch to build the notifications?
- Know how to attach event listeners and manage state without libraries?
- Know how to use css to absolutely and relatively position content
- Know how to align content (flexbox/grid, vertical-align, padding)
- Know about local/session storage to persist content across refreshes?
- Know about accessibility guidelines and attributes?
