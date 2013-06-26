var LinkedList = require('../linked_list').LinkedList;

describe("linked list constructor", function(){
    var subject = new LinkedList();

    it("can be instantiated without a first object", function() {
        expect(subject).not.toEqual(null);
    });

    it("has all the public API methods defined", function() {
        expect(subject.append).toBeDefined();
        expect(subject.find).toBeDefined();
        expect(subject.del).toBeDefined();
    });
});

describe("linked list append()", function(){
    var subject = new LinkedList();
    var pieceOfData = "Henry the Eighth";
    var secondPieceOfData = "Larry the Seventh";
    var thirdPieceOfData = "Elizabeth the First";

    describe("on an empty list", function() {
        beforeEach(function() {
            subject.firstNode = null;
        });

        it("it returns true", function() {
            expect(subject.append(pieceOfData)).toEqual(true);
        });

        it("becomes the last node", function() {
            subject.append(pieceOfData);
            expect(subject.last()).toEqual(pieceOfData);
        });

        it("increments the length by one", function() {
            subject.append(pieceOfData);
            expect(subject.length()).toEqual(1);
        });
    });
    
    describe("on a list with only one node", function() {
        beforeEach(function() {
            subject.firstNode = null;
            subject.append(pieceOfData);
        });

        it("it returns true", function() {
            expect(subject.append(secondPieceOfData)).toEqual(true);
        });

        it("becomes the last node", function() {
            subject.append(secondPieceOfData);
            expect(subject.last()).toEqual(secondPieceOfData);
        });

        it("increments the length by one", function() {
            subject.append(secondPieceOfData);
            expect(subject.length()).toEqual(2);
        });
    });

    describe("on a list with more than one node", function() {
        beforeEach(function() {
            subject.firstNode = null;
            subject.append(pieceOfData);
            subject.append(secondPieceOfData);
        });

        it("it returns true", function() {
            expect(subject.append(thirdPieceOfData)).toEqual(true);
        });

        it("becomes the last node", function() {
            subject.append(thirdPieceOfData);
            expect(subject.last()).toEqual(thirdPieceOfData);
        });

        it("increments the length by one", function() {
            subject.append(thirdPieceOfData);
            expect(subject.length()).toEqual(3);
        });
    });
});

describe("linked list find()", function() {
    var subject = new LinkedList();
    var pieceOfData = "Elizabeth the First";

    
});
