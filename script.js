function mincost(ropes)
{ 
//write your code here
// return the min cost
  let pq = new PriorityQueue();
    for (let i = 0; i < ropes.length; i++) {
        pq.enqueue(ropes[i]);
    }

    let totalCost = 0;
    while (pq.size() > 1) {
        let cost = pq.dequeue() + pq.dequeue();
        totalCost += cost;
        pq.enqueue(cost);
    }

    return totalCost;
}

module.exports=mincost;
