class node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}
class linkedList {
    constructor () {
        this.head = null
        this.size = 0
    }
    showHead () {
        return this.head
    }
    isEmpty () {
        return this.size === 0
    }
    getSize () {
        return this.size
    }
    showTail () {
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    at (index) {
        let i = 1
        if (this.isEmpty()) {
            return "This is empty"
        }
        if (index > this.size) {
            return "Linked List is not that large"
        }
        let currentNode = this.head
        while (i < index) {
            currentNode = currentNode.next
            i++
        }
        return currentNode
    }
    contains (value) {
        let currentNode = this.head
        let containsValue = false
        while (currentNode){
            if (currentNode.value == value) {
                containsValue = true
                return containsValue
            }
            else {
                currentNode = currentNode.next
            }
        }
        return containsValue
    }
    find (value) {
        let currentNode = this.head
        let i = 1
        while (currentNode) {
            if (currentNode.value == value) {
                return i
            }
            else {
                currentNode = currentNode.next
                i++
            }
        }
        return "this value does not exist!"
    }
    toString () {
        let currentNode = this.head
        let array = []
        while (currentNode) {
            array.push("( " + currentNode.value + " )")
            currentNode = currentNode.next
        }
        array.push("null")
        let list = array.join(' -> ')
        console.log(list)
    }
    pop () {
        let end = this.showTail()
        let newEnd = this.head
        while (newEnd.next != end) {
            newEnd = newEnd.next
        }
        newEnd.next = null
        return end
    }
    prepend (value) {
        let newNode = new node(value)
        if (this.isEmpty() === false) {
            newNode.next = this.head
        }
        this.head = newNode
        this.size++
    }
    append (value) {
        let newNode = new node(value)
        if ( this.isEmpty() === true) {
            this.head = newNode
        }
        else {
            let prev = this.head
            while(prev.next) {
                prev = prev.next
            }
            prev.next = newNode
        }
        this.size++
    }
}
const list = new linkedList()
list.prepend(1)
list.prepend(2)
list.append(3)
list.pop()
list.append(4)
console.log(list.find(4))
console.log(list.contains(4))
console.log(list.at(2))
list.toString()