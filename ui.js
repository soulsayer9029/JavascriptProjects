class UI{
    constructor(){
        this.profile=document.querySelector('#profile');
    }
    showProfile(user){
        this.profile.innerHTML=`
        <div class= 'card card-body mb-3'>
            <div class='row'>
                <div class='col-md-3'>
                    <img class='img-fluid mb-2' src='${user.avatar_url}'>
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class='col-md-9'>
                    <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
                    <span class="badge badge-secondary">Followers:${user.followers}</span>
                    <span class="badge badge-success">Public Gists:${user.public_gists}</span>
                    <span class="badge badge-info">Following:${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company : ${user.company}</li>
                        <li class="list-group-item">Blog: ${user.blog}</li>
                        <li class="list-group-item">Location : ${user.location}</li>
                        <li class="list-group-item">Member Since : ${user.created_at}</li>



                    </ul>
                </div>
            </div>
        </div> `

    }
    showRepos(repos){
        let output=' <h3>Latest Repositories</h3>';
         repos.forEach(function(repo){
             output=output+ `
            
             <div class= "card card-body mb-2">
                <div class="row">
                    <div class=col-md-6>
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    
                        <span class="badge badge-primary">Stars:${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Viewers:${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks:${repo.forms_count}</span>
                    
                </div>
            </div>
            `;
         });
         //output to html
         document.querySelector("#repos").innerHTML=output;
    }
    clearProfile(){
        this.profile.innerHTML=''
    }

    showAlert(message,className){
        //clear previous alerts
        this.clearAlert();
        const div=document.createElement('div');
        div.className=className;
        div.appendChild(document.createTextNode(message));
        const searchcontainer=document.querySelector('.searchContainer');
        //getting the search box
        const search=document.querySelector('.search');
        searchcontainer.insertBefore(div,search);
        //timer
        setTimeout(function(){
            this.clearAlert()
        }
            ,3000)
    }
    clearAlert(){
        const currentAlert =document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove()
        }
    }

}