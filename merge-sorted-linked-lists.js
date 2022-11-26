const mergeTwoLists = (l1,l2) => {
    if(!l1) return l2;
    if(!l2) return l1;

    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1; 
    }else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }

}

const l1 = { 
    val: 1,
    next: { 
        val: 8,
        next: {
            val: 22,
            next: {
                val: 40,
                next: null
            }
        }
    }
}
const l2 = { 
    val: 4,
    next: { 
        val: 11,
        next: {
            val: 16,
            next: {
                val: 20,
                next: null
            }
        }
    }
}

console.log(mergeTwoLists(l1, l2));