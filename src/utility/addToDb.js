import { toast } from "react-toastify";


const getStoredReadList = () =>{
    //read-list
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList =JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }

}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        //already exists. Do not add it
        toast('This Book already added read list')
    }
    else{
        storedList.push(id);
        // data store in LS 
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        //ideally trigger toast from the component
        toast('This book is added to your read list')

    }
}

// for wish list 

const getStoredWishList = () => {
    //wish-list
    const storedWisListStr = localStorage.getItem('wish-list');
    if(storedWisListStr){
        const storedWishList = JSON.parse(storedWisListStr);
        return storedWishList;
    }
    return [];
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        //already exists, Do no add it
        toast('This Book already added read list')
    }
    else{
        storedWishList.push(id);
        // wish list store LS 
        const storedWisListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWisListStr)
        toast('This book is added to your read list')
    }
}


export {addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList}