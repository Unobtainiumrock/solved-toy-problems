# Live or Leet Code?
  **`Live`**

# Solution
  This solution iterates the array until it finds the first `1` (beacause the `0`'s passed over are already in their proper positions). We then set a pointer to the position of that first `1` and indicate with a `boolean` that we have set our pointer. Then any `0`'s which come after our first `1` (determined by the `boolean`) will trigger a swap of that current `0`  with the first `1` we've found. We are able to do this because of a saved reference to the position of that first `1`. Afterwards, we move the pointer rightward one position because now it technically points to its new value of `0`, and the value to its immediate right will be a `1`.

  **note: I also provided my naive "dream solution" which breaks constraints rules. This is just to show another way of achieving the desired ouput in a readable format** 

## Challenges

### Technical
  * **No Whiteboard:** Hard to juggle lots of pieces of information in my head without a whiteboard. This problem was attempted during a live code session and I needed to draw out what I was trying to do.
  * **Constraints:** These can really throw a wrench in the ideal solution you have in your head. Don't get married to your ideas. Specifically for me, watch out for the space complexity constraint. I tend to sacrifice space for speed gains. A good example would be avoiding `O(n^2)` for a [`two-sum`](https://leetcode.com/problems/two-sum/) array problem by using a one pass hash. That hash will consume extra space. This probably won't be a problem if I can identify early on that I'm doing an in-place sort.

### Personal
  * **Live Coding:** This problem was given to me in a live coding environment with people watching. Its very  hard to focus in these kinds of settings if you aren't used to them. My solution to tackling this problem was to pretend as if I was the only person that existed. In retrospect I think its best to try and find ways to collaborate and bounce my ideas off observers. This will naturally come with practice and repitition.

## Learning Points
  * Do not make any assumptions about what the problem is.
  * Approach the problem as if you've never seen it before and have no knowledge of other algorithms, otherwise you can quickly confuse yourself and end up on the wrong path.
  * Take the most naive approach first, optimize later.
  * Verbalize thought process more clearly while coding. This will take practice.
  * Practice attempting problems without a whiteboard for interviews where it's not integrated into the interview process. Alternatively, ask if you can change the format by directing the interviewers to an additional link with a collaborative online white board -take charge.
  * Interact more with your observers. They're ultimately there to see how you solve problems. By interacting with them in a collaborative way, you're conveying that you will be an effective team player.
  * Remember for sorting algorithms that you don't need to consume extra space to save time when you are able to do these `"in place"`.