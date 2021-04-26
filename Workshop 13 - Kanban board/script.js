const drag_item=document.querySelectorAll('.drag-item');
const drag_list=document.querySelectorAll('.drag-item-list');

let selectItem;

// รายการ
drag_item.forEach((item)=>{
    item.addEventListener('dragstart',onDragStart);
});

// หมวดหมู่
drag_list.forEach((list)=>{
    list.addEventListener('dragover',onDragOver);
    list.addEventListener('dragenter',onDragEnter);
    list.addEventListener('drop',onDrop);
});
function onDrop(){
    this.append(selectItem);
    selectItem=null;
}
function onDragStart(){
    selectItem=this;
    console.log(selectItem);
}

function onDragEnter(e){
    e.preventDefault();
}
function onDragOver(e){
    e.preventDefault();
}