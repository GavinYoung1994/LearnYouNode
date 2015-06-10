var head = null;
var tail = null;
var nodeList = [];

function Node(value){
	this.value = value;
	this.prev;
	this.next;
}

Node.prototype.add = function(){
	if(head === null){
		head = this;
		tail = this;
		this.prev = null;
		this.next = null;
	}else{
		tail.next = this;
		this.next = null;
		this.prev = tail;
		tail = this;
	}
	nodeList.push(this);
}

function searchNode(node){
	if(head === null){
		return null;
	}
	var currentNode = head;
	while(currentNode!==null){
		if(node === currentNode){
			return currentNode;
		}
		currentNode = currentNode.next;
	}
	return null;
}

function deleteNode(node){
	var foundNode = searchNode(node);
	if(foundNode !== null){
		if(foundNode.prev === null){
			//if the found node is head
			foundNode.next.prev = null;
			head = foundNode.next;
			foundNode.next =null;
		}else if(foundNode.next === null){
			//if the found node is tail
			foundNode.prev.next = null;
			tail = foundNode.prev;
			foundNode.prev = null;
		}else{
			//if the found node is in the middle
			foundNode.prev.next = foundNode.next;
			foundNode.next.prev = foundNode.prev;
			foundNode.prev = null;
			foundNode.next = null;
		}
	}else{
		return null;
	}
}


Node.prototype.insertBefore = function(node){
	var foundNode = searchNode(node);
	if(foundNode !== null){
		if(foundNode.prev === null){
			//if the found node is head
			foundNode.prev = this;
			this.prev = null;
			this.next =  foundNode;
			head = this;
		}else{
			//if the found node is in the middle
			foundNode.prev.next = this;
			this.prev = foundNode.prev;
			foundNode.prev = this;
			this.next = foundNode;
		}
		nodeList.push(this);
	}else{
		return null;
	}
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(7);
var node8 = new Node(8);
var node9 = new Node(9);
var node10 = new Node(10);

node1.add();
node2.add();
node3.add();
node4.add();
node4.add();







