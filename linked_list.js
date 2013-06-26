//
// Singly-linked list implementation in JavaScript.
// Just for learning.
// JavaScript was the 'Top Language' on GitHub at the time so that's why I chose it.
// 
// Written by Parker Moore. http://parkermoore.de
// MIT License
//

//
// Nodes
//

var LinkedListNode = function(object) {
    this.data = object;
    this.getData = function() {
        return this.data;
    };
    this.setData = function(newData) {
        this.data = newData;
        return this.data;
    };

    this.nextNode = null;
    this.getNext = function() {
        return this.nextNode;
    };
    this.setNext = function(next) {
        this.nextNode = next;
        return this.nextNode;
    };
};

//
// List
//

var LinkedList = function() {
    this.firstNode = null;

    //
    // Helper Functions
    //

    this.findWhereTrue = function(node, conditionFunction) {
        if (conditionFunction(node)) {
            return node;
        } else if (node.getNext() === null) {
            return null;
        } else {
            return this.findWhereTrue(node.getNext(), conditionFunction);
        }
    };

    this.findNode = function(object) {
        if (this.firstNode === null) {
            return null;
        }
        return this.findWhereTrue(this.firstNode, function(node) {
            return node.getData() === object;
        });
    };

    this.findPreviousNode = function(object) {
        if (this.firstNode === null) {
            return null;
        }
        return this.findWhereTrue(this.firstNode, function(node) {
            return node.getNext() != null && node.getNext().getData() === object;
        });
    }

    this.lastNode = function() {
        if (this.firstNode === null) {
            return null;
        } else {
            return this.findWhereTrue(this.firstNode, function(node) {
                return node.getNext() === null;
            });
        }
    };

    //
    // Public-facing functions.
    //

    this.append = function(object) {
        var theLastNode = this.lastNode();
        var nodeToAppend = new LinkedListNode(object);
        if (theLastNode === null) {
            this.firstNode = nodeToAppend;
        } else {
            theLastNode.setNext(nodeToAppend);
        }
        return true;
    };

    this.find = function(object) {
        var nodeFound = this.findNode(object);
        if (nodeFound === null) {
            return null;
        } else {
            return nodeFound.getData();
        }
    };

    this.del = function(object) {
        var nodePreviousToDelete = this.findPreviousNode(object);
        if (nodePreviousToDelete === null) {
            return null;
        }
        var nodeToDelete = nodePreviousToDelete.getNext();
        var newNext = nodeToDelete.getNext();
        nodePreviousToDelete.setNext(newNext);
        return nodeToDelete;
    };
};
