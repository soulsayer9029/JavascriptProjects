const github=new Github;
const ui=new UI;
const searchUser=document.querySelector('#searchUser');
searchUser.addEventListener('keyup',(e)=>{
    //get input
    userInput=searchUser.value;

    if(userInput!==''){
        github.GetUser(userInput)
        .then(data =>{
            if(data.profile.message==='Not Found'){
                //show alert
                ui.showAlert('Profile Not Found','alert alert-danger')
            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
            
        
        
        })
    
    
    }
    else{
       
        //clear profile
        ui.clearProfile();
    }
})