
function mincost(ropes)
{ 
//write your code here
// return the min cost
	let minHeap = new MinHeap();
	for (let i = 0; i < ropes.length; i++) {
	    minHeap.insert(ropes[i]);
	}

	let totalCost = 0;
	while (minHeap.size() > 1) {
	    let cost = minHeap.remove() + minHeap.remove();
	    totalCost += cost;
	    minHeap.insert(cost);
	}
	return totalCost;
}

module.exports=mincost;
