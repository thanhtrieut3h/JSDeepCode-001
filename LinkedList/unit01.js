// Định nghĩa một Node trong LinkedList (tạo ra 1 phan tu trong danh sách liên kết)
function Node(value){
    this.value = value;
    this.next = null;
    // value : du lieu cua phan tu
    // next : con tro lien ket giua cac phan tu
}
// thêm vào đầu danh sách 1 phần tử
function insertAtHead(head, value){
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
}
// thêm phần tử vào cuối danh sách
function insertAtTail(head, value){
    const newNode = new Node(value);
    if(head === null){
        return newNode;
    }
    let current = head;
    while(current.next !== null){
        current = current.next;
    }
    current.next = newNode;
    return head;
}
// duyêt và in danh sách liên kết.
function printLinkedList(head){
    let current = head;
    const values = [];
    while(current !== null){
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(" --> "));
}
// tìm kiếm phần tử trong danh sách
function search(head, target){
    // target : gia tri can tim trong danh sach
    let current = head;
    let position = 0;
    while(current !== null){
        if(current.value === target){
            return position;
        }
        current = current.next;
        position++;
    }
    return -1;
}
// xoa node theo giá trị trong danh sách
function deleteByValue(head, target){
    // target : gia tri cua Node can xoa
    if(head === null){
        return null;
    }
    // can xoa ngay head
    if(head.value === target){
        return head.next;
    }
    let current = head;
    while(current.next !== null){
        if(current.next.value === target){
            current.next = current.next.next;
            return head;
        }
        current = current.next;
    }
    return head;
}

// chay chuong trinh
let myLinkedList = null; // danh sach lien ket rong
let head = null; // Danh sach lien ket chi giu tham chieu(con tro) den Node(phan tu) dau tien
myLinkedList = insertAtHead(myLinkedList, 10);
myLinkedList = insertAtHead(myLinkedList, 20);
myLinkedList = insertAtTail(myLinkedList, 30);
myLinkedList = insertAtTail(myLinkedList, 40);
myLinkedList = insertAtHead(myLinkedList, 5);
console.log(myLinkedList);
console.log("Danh sach lien ket hien tai : ");
printLinkedList(myLinkedList);
let searchEl = search(myLinkedList, 10);
console.log(searchEl); // vi tri cua Node(phan tu) trong danh sach

myLinkedList = deleteByValue(myLinkedList, 20);
console.log("Danh sach sau khi xoa phan tu 20 : ");
printLinkedList(myLinkedList);

myLinkedList = deleteByValue(myLinkedList, 5);
console.log("Danh sach sau khi xoa phan tu 5 : ");
printLinkedList(myLinkedList);