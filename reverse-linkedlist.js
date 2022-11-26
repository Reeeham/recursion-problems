const reverseLinkedList = (head) => {
    if(!head || !head.next) return head; //base case there's no head or one element 

    let p = reverseLinkedList(head.next);

    head.next.next = head;
    head.next = null;
    return p;
}

 const head =  {
        value: 1,
        next: {
            value: 2 ,                                            
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null	
                    }
                }
            }
        };

console.log(reverseLinkedList(head));

