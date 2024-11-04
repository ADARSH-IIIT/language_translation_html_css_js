 const messagedetails = {
    user1 : "this is default mssg" , 

    user2 : "this is default mssg" , 

}






function updatemessage( userid , currentmessage ){

   
    

         messagedetails[userid] = currentmessage


         document.getElementById(`${userid}currentmessage`).innerText = currentmessage


}


updatemessage('user1' , messagedetails.user1)

updatemessage('user2' , messagedetails.user2)
