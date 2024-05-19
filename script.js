class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  
  enqueue(element){
    if (this.isEmpty()){ 
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 1; i <= this.collection.length; i++){
        if (element[1] < this.collection[i-1][1]){ 
          this.collection.splice(i-1, 0, element);
          added = true;
          break;
        }
      }
      if (!added){
        this.collection.push(element);
      }
    }
  };
  
  dequeue() {
    let value = this.collection.shift();
    return value;
  };
  
  isEmpty() {
    return (this.collection.length === 0) 
  };
  
  size(){
    return this.collection.length;
  }
}
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
