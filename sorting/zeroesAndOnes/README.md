# Solution
  This solution iterates the array until it finds the first `1` (beacause the `0`'s passed over are already in their proper positions). We then set a pointer to the position of that first `1` and indicate with a `boolean` that we have set our pointer. Then any `0`'s which come after our first `1` (determined by the `boolean`) will trigger a swap of that current `0`  with the first `1` we've found. We are able to do this because of a saved reference to the position of that first `1`. Afterwards, we move the pointer rightward one position because now it technically points to its new value of `0`, and the value to its immediate right will be a `1`.

## Challenges

### Technical
  * 

### Personal
  * **Live Coding:** This problem was given to me in a live coding environment with people watching. Its very  hard to focus in these kinds of settings if you aren't used to them. My solution to tackling this problem was to pretend as if I was the only person that existed. In retrospect I think its best to try and find ways to collaborate and bounce my ideas off observers. This will naturally come with practice and repitition.

## Learning Points
  * Do not make any assumptions about what the problem is.
  * Approach the problem as if you've never seen it before and have no knowledge of other algorithms, otherwise you can quickly confuse yourself and end up on the wrong path.
  * Take the most naive approach first, optimize later.
  * Verbalize thought process more clearly while coding. This will take practice.